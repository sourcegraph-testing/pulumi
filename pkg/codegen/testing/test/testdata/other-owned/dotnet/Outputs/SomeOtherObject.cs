// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Other.Example.Outputs
{

    [OutputType]
    public sealed class SomeOtherObject
    {
        public readonly string? Baz;

        [OutputConstructor]
        private SomeOtherObject(string? baz)
        {
            Baz = baz;
        }
    }
}
