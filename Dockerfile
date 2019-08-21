FROM node:10.16.2

WORKDIR /user/src/speech-log

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]