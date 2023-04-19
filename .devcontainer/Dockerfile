FROM mcr.microsoft.com/devcontainers/typescript-node:0-16

# ENV DEBIAN_FRONTEND=noninteractive

# RUN \
#   apt-get update \
#   && apt-get -y install --no-install-recommends <your-package-list-here> \
#   && apt-get clean -y \
#   && rm -rf /var/lib/apt/lists/*

USER node

RUN npm install --global @antfu/ni bumpp npkill pnpm taze
