# MySQL Docker Container Setup
### Overview
This guide provides step-by-step instructions to set up a MySQL Docker container and retrieve the connection string.

#### Prerequisites
Docker Desktop installed on your system.
Steps
#### 1. Install Docker Desktop
Download and install Docker Desktop from Docker's official website.
#### 2. Pull MySQL Image
Open your terminal or command prompt.

#### Run the following command to pull the latest MySQL Docker image:


#### docker pull mysql:latest
3. Run MySQL Container
Navigate to your project directory in the terminal.
Execute the following command to run a MySQL container:



#### docker run --name twitch-container -e MYSQL_ROOT_PASSWORD=root -p 3001:3306 -d mysql:latest

Replace 3001 with the desired port number.
Modify -e MYSQL_ROOT_PASSWORD=root to set your desired root password.
#### 4. Verify Container Status
Check if the container is running by executing:

#### docker ps -a

#### 5. Connect to MySQL
To access the MySQL shell within the container, run:


#### docker exec -it twitch-container mysql -uroot -p

Enter the password you set earlier when prompted.

You should now be connected to the MySQL database. You can run SHOW DATABASES; to verify.

6. Connection String
Use the following connection string format to connect to your MySQL database:

#### mysql://root:MYSQL_ROOT_PASSWORD@localhost:3001/your_database_name
Replace MYSQL_ROOT_PASSWORD with the password you set for the root user.

Replace your_database_name with the name of your database obtained from SHOW DATABASES;.

First, run the development server:

```bash
## authentication via clerk
(https://dashboard.clerk.com/)

## Sync Clerk data to your application with webhooks
[doc](https://clerk.com/docs/integrations/webhooks/sync-data)