sudo docker rm $(sudo docker ps -a -q) -f
sudo docker volume prune -f
sudo docker compose -f docker-compose-dtacq.yml up --build
