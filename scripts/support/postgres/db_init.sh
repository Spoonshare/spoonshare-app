#!/bin/bash

#Postgres Docker Initialization Script
#tweak of https://github.com/mrts/docker-postgresql-multiple-databases

set -e
set -u

function create_database_with_creds() {
  local database=$1
  echo "💽 Creating Database: ${database}"
  echo "🕵️ User: ${POSTGRES_USER}"
  echo "🔑 Password: ${POSTGRES_PASSWORD}"
  echo "Creating Database..."
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
        CREATE DATABASE $database;
        GRANT ALL PRIVILEGES ON DATABASE $database TO $POSTGRES_USER;
EOSQL
    echo "Created"
}

create_database_with_creds "spoonshare_dev"
create_database_with_creds "spoonshare_test"

echo "Done"