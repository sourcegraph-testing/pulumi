# Copyright 2020, Pulumi Corporation.  All rights reserved.

import pulumi

slug = f"{pulumi.get_organization()}/{pulumi.get_project()}/{pulumi.get_stack()}"
a = pulumi.StackReference(slug)

got_err = False

try:
    a.get_output('val2')
except Exception:
    got_err = True

if not got_err:
    raise Exception('Expected to get error trying to read secret from stack reference.')
