import web, json

urls = [
    '/punch/(.+)', 'punch'
]
app = web.application(urls, globals())


class punch:
    def POST(self, user_id):
        # expected in date format "YYYY-MM-DDThh:mm:ssTZD"
        data = json.loads(web.data())
        return json.dumps({'user_id': user_id, 'punch_time': data['punch_time']})

if __name__ == '__main__':
    app.run()
