// Copyright 2016-2020, Pulumi Corporation.  All rights reserved.

import * as pulumi from "@pulumi/pulumi";

class MyResource extends pulumi.dynamic.Resource {
    constructor(name: string, props: pulumi.Inputs, opts?: pulumi.CustomResourceOptions) {
        super({
            create: async (inputs: any) => {
                return {
                    id: "0",
                    outs: inputs,
                }
            },
        }, name, props, opts);
    }
}

class GetResource extends pulumi.Resource {
    foo: pulumi.Output<string>;
    bar: pulumi.Output<string>;

    constructor(urn: pulumi.URN) {
        const props = {
            foo: undefined,
            bar: undefined,
        };
        super("unused:unused:unused", "unused", true, props, { urn });
    }
}

const a = new MyResource("a", {
    foo: "foo",
    bar: pulumi.secret("my-$ecret"),
});

const getFoo = a.urn.apply(urn => {
    const r = new GetResource(urn);
    return r.foo
});

const getBar = a.urn.apply(urn => {
    const r = new GetResource(urn);
    return r.bar
});


export const foo = getFoo;
export const secret = getBar;