export function handler(event, context, callback) {
    const todos = [
        { id: 1, name: 'clean up', status: 'open' },
        { id: 2, name: 'cook', status: 'done' },
    ]
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({data: todos}),
    });
}