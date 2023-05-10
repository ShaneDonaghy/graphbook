

MYSQL Remote TroubleShooting: 
Make sure the DB exists if youre building again
Create user and grant access from the remote client: 
'''GRANT ALL ON *.* to 'shane'@'remote_ip_address' IDENTIFIED BY 'boobs' WITH GRANT OPTION;
   FLUSH PRIVILEGES;
   EXIT;'''

   Set bind-address to 0.0.0.0 instead of 127.0.0.1 in /etc/mysql/mariadb.conf.d/50-server.cnf (pi)






   Postman Resources: 
   Random variables for use in testing: https://learning.postman.com/docs/writing-scripts/script-references/variables-list/ 