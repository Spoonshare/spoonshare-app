# About "bullseye" https://wiki.debian.org/DebianBullseye

# About ruby image https://github.com/docker-library/ruby/blob/9fd589661dd0e12b082336e9c6f731196fe39ba8/3.1/bullseye/Dockerfile

FROM ruby:3.1.3-bullseye

LABEL project="Spoonshare API"
LABEL version="0.1a"

RUN apt-get update -qq \
  && apt-get install -qq libpq-dev curl \
  && apt-get clean -qq \
  && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /app
WORKDIR /app