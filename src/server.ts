import {Server, Request, ResponseToolkit} from '@hapi/hapi';

const init = async () => {

    const server = new Server({
        port: 4000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/test',
        handler: (request: Request, h: ResponseToolkit) => {
            return {message: 'hello'};
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init().then();
