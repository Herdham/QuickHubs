#!/bin/bash
set -e

# Update apt and install dependencies to build and run MariaDB Connector/C
apt-get update && apt-get install -y wget build-essential cmake

# Remove old mariadb connector if installed (optional, but safer)
apt-get remove -y libmariadb3 libmariadb-dev || true

# Download and install MariaDB Connector/C >= 3.3.1
wget https://downloads.mariadb.com/Connectors/c/connector-c-3.3.3/mariadb-connector-c_3.3.3-1_amd64.deb
dpkg -i mariadb-connector-c_3.3.3-1_amd64.deb

# Optional: fix broken dependencies if any
apt-get install -f -y

# Now install Python dependencies
pip install --upgrade pip
pip install -r requirements.txt
