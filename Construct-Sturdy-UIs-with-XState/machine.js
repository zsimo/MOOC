"use strict";

var {Machine, interpret, assign} = require("xstate");



module.exports = {
    fetchMachine : Machine({
        id: "fetch",
        initial: "idle",
        context: {
            results: undefined,
            message: ""
        },
        states: {
            idle: {
                on: {
                    FETCH: "pending"
                }
            },
            pending: {
                entry: ["fetchData"],
                on: {
                    RESOLVE: {
                        target: "successful",
                        actions: ["setResults"]
                    },
                    REJECT: {
                        target: "failed",
                        actions: ["setMessage"]
                    }
                }
            },
            failed: {
                on: {
                    FETCH: "pending"
                }
            },
            successful: {
                on: {
                    FETCH: "pending"
                }
            }
        }
    }, {
        actions: {
            setResults: assign(function (context, event) {
                return {
                    results: event.results
                };
            }),
            setMessage: assign(function (context, event) {
                return {
                    message: event.message
                };
            })
        }
    }),

    interpret: interpret
};