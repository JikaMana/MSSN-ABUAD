#!/bin/bash
set -o errexit  # Exit on error

echo "---- Installing dependencies ----"
pip install -r requirements.txt

echo "---- Running database migrations ----"
flask db upgrade

echo "---- Build completed ----"