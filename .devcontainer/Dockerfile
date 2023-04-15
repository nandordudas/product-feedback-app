FROM atkrad/wait4x:latest as wait4x

FROM mcr.microsoft.com/devcontainers/typescript-node:0-18
COPY --from=wait4x /usr/bin/wait4x /usr/bin/wait4x

# ENV DEBIAN_FRONTEND=noninteractive

# RUN \
#   apt-get update \
#   && apt-get -y install --no-install-recommends <your-package-list-here> \
#   && apt-get clean -y \
#   && rm -rf /var/lib/apt/lists/*
