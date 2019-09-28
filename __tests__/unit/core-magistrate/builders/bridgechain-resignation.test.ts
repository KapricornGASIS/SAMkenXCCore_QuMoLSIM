import "jest-extended";

import { Builders as MagistrateBuilders } from "@arkecosystem/core-magistrate-crypto";
import { BridgechainResignationTransaction } from "@arkecosystem/core-magistrate-crypto";
import { Managers, Transactions } from "@arkecosystem/crypto";

let builder: MagistrateBuilders.BridgechainResignationBuilder;

describe("Bridgechain resignation builder", () => {
    Managers.configManager.setFromPreset("testnet");
    Transactions.TransactionRegistry.registerTransactionType(BridgechainResignationTransaction);

    beforeEach(() => {
        builder = new MagistrateBuilders.BridgechainResignationBuilder();
    });
    describe("should test verification", () => {
        it("should be true", () => {
            const actual = builder.businessResignationAsset("1").sign("passphrase");
            expect(actual.build().verified).toBeTrue();
            expect(actual.verify()).toBeTrue();
        });
    });
});