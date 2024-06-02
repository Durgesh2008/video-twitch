import { error } from "console";
import { getself } from "./auth-service";
import { db } from "./db";

export const isBlocking = async (id: string) => {
  try {
    const self = await getself();

    if (!self) {
      throw new Error("please login for blocking user");
    }
    const exituser = await db.user.findUnique({
      where: { id },
    });

    if (!exituser) {
      throw new Error("user not found");
    }

    if (exituser.id === self.id) {
      return false;
    }
    const existBlocked = await db.block.findUnique({
      where: {
        blockerId_blockedId: {
          blockerId:self.id,
          blockedId:id,
        },
      },
    });

    return !!existBlocked;
  } catch (error) {
    return false;
  }
};

export const isBlockedByUser = async (id: string) => {
  try {
    const self = await getself();

    if (!self) {
      throw new Error("please login for blocking user");
    }
    const exituser = await db.user.findUnique({
      where: { id },
    });

    if (!exituser) {
      throw new Error("user not found");
    }

    if (exituser.id === self.id) {
      return false;
    }
    const existBlocked = await db.block.findUnique({
      where: {
        blockerId_blockedId: {
          blockerId:id,
          blockedId:self.id,
        },
      },
    });

    return !!existBlocked;
  } catch (error) {
    return false;
  }
};

export  const blockUser = async (id: string) => {
  const self = await getself();

  if (!self) {
    throw new Error("please login for blocking user");
  }
  if(self.id === id){
    throw new Error("can't block yourself")
  }
  const exituser = await db.user.findUnique({
    where: { id },
  });

  if (!exituser) {
    throw new Error("user not found");
  }

  const existBlocked = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self.id,
        blockedId: id,
      },
    },
  });
  if (existBlocked) {
    throw new Error("user already blocked by you");
  }

  const blockedUser = await db.block.create({
    data: {
      blockerId: self.id,
      blockedId: id,
    },
    include: {
      blocked: true,
    },
  });
  return blockedUser;
};

export const unBlockUser = async (id: string) => {
  const self = await getself();

  if (!self) {
    throw new Error("please login for blocking user");
  }

  if(self.id === id){
    throw new Error("can't unblock yourself")
  }
  const exituser = await db.user.findUnique({
    where: { id },
  });

  if (!exituser) {
    throw new Error("user not found");
  }

  const existBlocked = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self.id,
        blockedId: id,
      },
    },
  });
  if (!existBlocked) {
    throw new Error("user already unblocked by you");
  }

  const unblockedUser = await db.block.delete({
    where: {
      id: existBlocked.id,
    },
    include: {
      blocked: true,
    },
  });

  return unblockedUser;
};
