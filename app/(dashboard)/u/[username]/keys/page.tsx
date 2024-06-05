import { satoshiFont } from "@/app/font";
import { Button } from "@/components/ui/button";
import React from "react";
import UrlCard from "./_component/UrlCard";
import { getself } from "@/lib/auth-service";
import { getStreamByUserID } from "@/lib/steram-service";
import KeyCard from "./_component/KeyCard";
import ConnectComponet from "./_component/ConnectComponet";
import ConnectModel from "./_component/ConnectComponet";

const KeysPage = async() => {
    const self = await getself()
    const stream = await getStreamByUserID(self.id)

    if(!stream){
        throw new Error("stream not found")
    }
  return (
    <div className={`p-6 `}>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl text-white font-bold">Keys & URLs</h1>
        <ConnectModel/>
      </div>
      <div className="space-y-4">
        <UrlCard value={stream.serverUrl}/>
        <KeyCard value={stream.streamKey}/>
      </div>
    </div>
  );
};

export default KeysPage;
