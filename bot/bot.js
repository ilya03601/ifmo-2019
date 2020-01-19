const { ActivityHandler } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor() {
        super();

        this.onMessage(async (context, next) => {
            let result = `You said '${ context.activity.text }'`;
            if (context.activity.text === 'Привет') {
                result = 'Тоже привет';
            }
            await context.sendActivity(result);

            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity('Hello and welcome!');
                }
            }

            await next();
        });
    }
}

module.exports.EchoBot = EchoBot;
