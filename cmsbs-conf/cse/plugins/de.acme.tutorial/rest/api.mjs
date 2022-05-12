/// <reference path="../../../.vscode.js"/>

import { RouterBuilder } from "@de.pinuts.apirouter/shared/routing.es6";

de.acme.tutorialController = new RouterBuilder()
    .get('/hello', (req, res) => {
        res.json({
            msg: 'Hello world!',
            params: req.params,
            headers: req.headers,
        });
    })

    .build();
