[@sbr/common](../README.md) / genesisStates

# Module: genesisStates

## Table of contents

### Functions

- [genesisStateById](genesisstates.md#genesisstatebyid)
- [genesisStateByName](genesisstates.md#genesisstatebyname)

## Functions

### genesisStateById

▸ **genesisStateById**(`id`: *number*): *any*

Returns the genesis state by network ID

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | *number* | ID of the network (e.g. 1) |

**Returns:** *any*

Dictionary with genesis accounts

Defined in: [src/genesisStates/index.ts:25](https://github.com/siliconswampio/sbr-common/blob/master/src/genesisStates/index.ts#L25)

___

### genesisStateByName

▸ **genesisStateByName**(`name`: *string*): *any*

Returns the genesis state by network name

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | Name of the network (e.g. 'mainnet') |

**Returns:** *any*

Dictionary with genesis accounts

Defined in: [src/genesisStates/index.ts:34](https://github.com/siliconswampio/sbr-common/blob/master/src/genesisStates/index.ts#L34)
