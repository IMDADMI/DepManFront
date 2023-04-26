FROM        node:18-alpine
LABEL       AUTHOR = CHILLOU-ADMI
WORKDIR     /vueapp
COPY        package.json package-lock.json ./
RUN         npm install
COPY        . ./
EXPOSE      3030
ENTRYPOINT [ "npm","run","serve" ]
