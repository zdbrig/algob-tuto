
// ## ACCOUNTS USING Secret Key ##
let accounts = [{
  name: "owner",
  addr: 'SGPYOXWJBXXLD4LV4I5MZSODK3Z7KFNQJZZ2YTVNONIZS34YPCVGULGO6A',
  sk: new Uint8Array([
    101, 185, 107, 227, 165, 250, 88, 157, 107, 41, 90,
    48, 185, 47, 27, 195, 199, 35, 234, 90, 75, 213,
    29, 88, 113, 96, 130, 199, 16, 177, 136, 27, 145,
    159, 135, 94, 201, 13, 238, 177, 241, 117, 226, 58,
    204, 201, 195, 86, 243, 245, 21, 176, 78, 115, 172,
    78, 173, 115, 81, 153, 111, 152, 120, 170
  ])
},
{
  name: "master-account",
  addr: "GNP7AV3UNIZRUQQHVGNXDIJ55Y7NZEUC5WZ4ME37FWQRVHGAOBNVEY4D3Y",
  sk: new Uint8Array([201, 228, 54, 54, 130, 67, 75, 205, 53, 206, 134, 255, 44, 108, 32, 57, 91, 12, 236, 162, 195, 21, 154, 213, 40, 41, 157, 157, 53, 187, 55, 28, 51, 95, 240, 87, 116, 106, 51, 26, 66, 7, 169, 155, 113, 161, 61, 238, 62, 220, 146, 130, 237, 179, 198, 19, 127, 45, 161, 26, 156, 192, 112, 91])
},
{
  name: "elon-musk",
  addr: "VKDNII3VXWP7ZPNMROOQ6O32EBGMH73X4NTKPCTHFZ333RFDET4Z6WP6XY",
  sk: new Uint8Array([103, 95, 124, 215, 124, 121, 179, 113, 207, 216, 65, 160, 246, 161, 198, 108, 194, 127, 183, 179, 112, 119, 151, 94, 1, 66, 43, 31, 15, 148, 252, 224, 170, 134, 212, 35, 117, 189, 159, 252, 189, 172, 139, 157, 15, 59, 122, 32, 76, 195, 255, 119, 227, 102, 167, 138, 103, 46, 119, 189, 196, 163, 36, 249])
}

,
{
  name: "john",
  addr: "KN3JYK6QHXTVWWVD3CCG2KJMYW5ZTDMFUBTIJ5OUWCJEPN52KD7WBZ3BWM",
  sk: new Uint8Array( [204,3,176,117,209,102,171,121,91,32,121,204,66,233,0,155,161,139,145,3,162,27,190,167,179,116,97,62,40,251,206,98,83,118,156,43,208,61,231,91,90,163,216,132,109,41,44,197,187,153,141,133,160,102,132,245,212,176,146,71,183,186,80,255])
}
,
{
  name: "bob",
  addr: "P4XJX5TOXCLRHHKXY3ZAWONA7DO2RZQBDDGGRZ53WURBP4JKH7KWG4IVHA",
  sk: new Uint8Array( [78,54,58,32,20,6,211,64,181,50,229,43,83,158,92,3,42,11,224,47,50,243,89,49,177,135,215,81,29,111,170,63,127,46,155,246,110,184,151,19,157,87,198,242,11,57,160,248,221,168,230,1,24,204,104,231,187,181,34,23,241,42,63,213])
}
,
{
  name: "gold",
  addr: "J6JBC7U24URSWPR3MYDL4ZJOCOYWYFE277T4Y7FBJOXWIJFZEQQYH34V3I",
  sk: new Uint8Array( [136,117,185,248,11,75,36,72,36,97,183,87,181,226,89,123,226,134,64,170,205,224,180,243,92,241,178,78,237,120,119,107,79,146,17,126,154,229,35,43,62,59,102,6,190,101,46,19,177,108,20,154,255,231,204,124,161,75,175,100,36,185,36,33])
}
]


let defaultCfg = {
  host: "https://algorandtestnet.sqoin.us",
  port: 443,

  token: "9a68ba4c1c8d6170886092fc4cad522652fa549598df5121be0ad5c677061d41",
  accounts: accounts,
};

module.exports = {
  networks: {
    localhost: defaultCfg,
    default: defaultCfg
  }
};