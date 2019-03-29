import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');

Meteor.methods({
    'test1000'({}) {
        for(let i = 1; i <= 1000; i++) {
            Tasks.insert({
                id: i,
                createAt: new Date()
            });
        };
    }
});

Meteor.methods({
    'test5000'({}) {
        for(let i = 1; i <= 5000; i++) {
            Tasks.insert({
                id: i,
                createAt: new Date()
            });
        };
    }
});

Meteor.methods({
    'test10000'({}) {
        for(let i = 1; i <= 10000; i++) {
            Tasks.insert({
                id: i,
                createAt: new Date()
            });
        };
    }
});

Meteor.methods({
    'refresh'({}) {
        Tasks.remove({});
    }
});