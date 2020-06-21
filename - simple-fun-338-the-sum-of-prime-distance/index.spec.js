const sumOfPrimeDistance = require("./index");

describe("Simple Fun #338: The sum of the Prime Distance", () => {
    it("tests", () => {
        expect(sumOfPrimeDistance([4, 6, 12])).toEqual(6) // 3 * 2
        // expect(sumOfPrimeDistance([4, 6, 12, 14, 16, 20])).toEqual(40)
        // expect(sumOfPrimeDistance([54, 72, 90, 98, 112, 140, 144, 166, 192, 214, 220, 234])).toEqual(906)
        // expect(sumOfPrimeDistance(
        //     [100, 120, 156, 188, 214, 242, 280, 310, 322, 342, 364, 396, 428, 436, 460, 484, 502, 508, 518, 532, 560, 578, 588, 620, 634, 670, 674, 694, 732, 752, 758, 774, 812, 852, 876, 896, 916, 946, 960, 964, 990, 994, 1032, 1072, 1096, 1124, 1144, 1170, 1184, 1192, 1210, 1246, 1260, 1268, 1282, 1314, 1334, 1350, 1372, 1380, 1404, 1428, 1468, 1474, 1478, 1498, 1522, 1546, 1556, 1572, 1606, 1636, 1664, 1672, 1698, 1700, 1712, 1750, 1786, 1816, 1826, 1838, 1868, 1876, 1894, 1902, 1942, 1966, 1986, 1988, 2000, 2006, 2040, 2064, 2088, 2128, 2148, 2170, 2174, 2188, 2202, 2224, 2256, 2258, 2276, 2300, 2308, 2320, 2336, 2362, 2394, 2430, 2446, 2484, 2502, 2526, 2540, 2558, 2562, 2602, 2616, 2622, 2650, 2676, 2704, 2714, 2724, 2732, 2738, 2752, 2766, 2768, 2798, 2826, 2852, 2854, 2860, 2868, 2878, 2904, 2914, 2948, 2978, 3010, 3022, 3040, 3052, 3056, 3072, 3112, 3116, 3156, 3186, 3190, 3200, 3220, 3228, 3262, 3278, 3292, 3306, 3314, 3344, 3376, 3380, 3382, 3420, 3422, 3448, 3462, 3466, 3502, 3524, 3538, 3562, 3564, 3586, 3590, 3606, 3620, 3658, 3662, 3666, 3678, 3718, 3730, 3758, 3794, 3816, 3830, 3850, 3880, 3898, 3930, 3970, 3996, 3998, 4014, 4022, 4058, 4084, 4094, 4130, 4160, 4194, 4220, 4250, 4268, 4284, 4306, 4322, 4362, 4402, 4434, 4472, 4508, 4536, 4568, 4604, 4608, 4634, 4660, 4692, 4702, 4722, 4738, 4742, 4754, 4762, 4788, 4822, 4862, 4886, 4922, 4938, 4974, 5010, 5034, 5062, 5102, 5132, 5160, 5172, 5208, 5238, 5244, 5278, 5312, 5352, 5390, 5422, 5436, 5472, 5488, 5506, 5516, 5544, 5566, 5576, 5594, 5600, 5632, 5646, 5654, 5666, 5678, 5708, 5740, 5764, 5768, 5800, 5818, 5854, 5894, 5900, 5936, 5964, 5998, 6036, 6070, 6100, 6138, 6144, 6158, 6180, 6218, 6228, 6238, 6254, 6292, 6324, 6360, 6398, 6400, 6408, 6420, 6454, 6456, 6468, 6502, 6522, 6546, 6572, 6606, 6624, 6630, 6646, 6656, 6678, 6682, 6720, 6722, 6752, 6758, 6776, 6788, 6800, 6802, 6830, 6832, 6856, 6886, 6912, 6942, 6976, 7016, 7038, 7070, 7084, 7098, 7112, 7116, 7148, 7176, 7194, 7210, 7250, 7282, 7298, 7300, 7338, 7368, 7386, 7414, 7436, 7442, 7462, 7468, 7470, 7504, 7522, 7544, 7572, 7580, 7602, 7638, 7678, 7710, 7746, 7758, 7792, 7800, 7808, 7820, 7828, 7840, 7854, 7870, 7886, 7918, 7948, 7962, 7978, 7986, 7988, 7990, 8026, 8052, 8086, 8096, 8126, 8166, 8194, 8212, 8240, 8244, 8252, 8264, 8300, 8328, 8338, 8362, 8366, 8380, 8386, 8422, 8428, 8442, 8478, 8504, 8540, 8558, 8598, 8626, 8646, 8660, 8680, 8712, 8744, 8764, 8786, 8796, 8824, 8846, 8878, 8904, 8936, 8958, 8972, 8988, 8994, 9030, 9070, 9084, 9112, 9124, 9164, 9202, 9226, 9230, 9262, 9278, 9288, 9314, 9346, 9370, 9386, 9420, 9428, 9456, 9494, 9530, 9560, 9562, 9600, 9606, 9620, 9642, 9676, 9696, 9716, 9720, 9738, 9760, 9776, 9794, 9812, 9820, 9852, 9872, 9880, 9916, 9930, 9962, 9994, 10022, 10062, 10090, 10118, 10132, 10154, 10172, 10206, 10228, 10252, 10260, 10278, 10296, 10328, 10336, 10366, 10382, 10388, 10390, 10420, 10434, 10468, 10478, 10508, 10520, 10536, 10572, 10584, 10612, 10636, 10676, 10708, 10732, 10736, 10770, 10808, 10844, 10882, 10918, 10940, 10946, 10972, 10976, 11016, 11042, 11046, 11078, 11080, 11104, 11140, 11142, 11154, 11190, 11192, 11208, 11240, 11252, 11260, 11266, 11284, 11318, 11328, 11362, 11368, 11404, 11440, 11442, 11472, 11490, 11492, 11522, 11552, 11588, 11604, 11628, 11668, 11690, 11716, 11748, 11762, 11782, 11784, 11792, 11822, 11840, 11860, 11862, 11898, 11934, 11962, 11966, 11990, 12000, 12006, 12036, 12040, 12050, 12054, 12064, 12098, 12122, 12126, 12130, 12146, 12150, 12170, 12188, 12200, 12226, 12256, 12296, 12330, 12344, 12348, 12372, 12388, 12394, 12428, 12458, 12474, 12508, 12548, 12578, 12612, 12648, 12670, 12680, 12696, 12720, 12726, 12728, 12760, 12800, 12834, 12868, 12898, 12912, 12938, 12948, 12968, 12994, 13016, 13028, 13040, 13074, 13078, 13106, 13134, 13138, 13166, 13196, 13210, 13212, 13242, 13248, 13288, 13324, 13358, 13394, 13420, 13446, 13480, 13494, 13504, 13506, 13532, 13534, 13558, 13586, 13626, 13654, 13674, 13702, 13726, 13748, 13758, 13772, 13804, 13828, 13852, 13854, 13870, 13888, 13914, 13950, 13972, 13992, 14032, 14062, 14066, 14106, 14128, 14160, 14196, 14198, 14208, 14216, 14224, 14232, 14268, 14270, 14302, 14306, 14308, 14344, 14364, 14376, 14414, 14420, 14440, 14456, 14466, 14486, 14520, 14542, 14554, 14574, 14592, 14612, 14628, 14646, 14652, 14658, 14670, 14674, 14686, 14696, 14722, 14746, 14768, 14802, 14834, 14836, 14876, 14914, 14938, 14956, 14974, 15006, 15044, 15080, 15118, 15120, 15132, 15168, 15202, 15206, 15246, 15252, 15286, 15320, 15352, 15360, 15372, 15376, 15382, 15422, 15436, 15464, 15496, 15522, 15562, 15586, 15602, 15612, 15620, 15624, 15642, 15678, 15688, 15710, 15748, 15776, 15816, 15824, 15832, 15850, 15868, 15900, 15916, 15952, 15980, 16020, 16040, 16062, 16076, 16100, 16128, 16142, 16146, 16162, 16168, 16194, 16234, 16254, 16266, 16274, 16302, 16304, 16312, 16344, 16374, 16392, 16398, 16428, 16452, 16476, 16496, 16498, 16516, 16536, 16538, 16540, 16570, 16610, 16628, 16660, 16672, 16700, 16710, 16726, 16762, 16768, 16792, 16804, 16806, 16814, 16816, 16828, 16862, 16896, 16926, 16938, 16956, 16974, 16990, 16994, 16996, 17014, 17054, 17080, 17082, 17120, 17144, 17164, 17174, 17206, 17230, 17246, 17270, 17284, 17316, 17354, 17360, 17400, 17420, 17436, 17444, 17472, 17506, 17542, 17560, 17568, 17606, 17614, 17650, 17686, 17710, 17726, 17750, 17774, 17806, 17808, 17848, 17858, 17888, 17904, 17914, 17946, 17962, 17972, 18010, 18040, 18060, 18066, 18076, 18096, 18126, 18140, 18166, 18174, 18180, 18186, 18192, 18218, 18240, 18280, 18304, 18340, 18374, 18410, 18436, 18440, 18462, 18494, 18524, 18530, 18558, 18596, 18620, 18630, 18664, 18666, 18696, 18732, 18738, 18760, 18800, 18832, 18842, 18870, 18876, 18900, 18920, 18954, 18986, 18998, 19000, 19010, 19048, 19072, 19082, 19112, 19148, 19184, 19220, 19246, 19266, 19298, 19302, 19330, 19368, 19380, 19414, 19422, 19448, 19466, 19496, 19500, 19506, 19510, 19530, 19562, 19598, 19616, 19648, 19686, 19696, 19734, 19772, 19810, 19826, 19834, 19856, 19858, 19884, 19924, 19946, 19980, 20014, 20038, 20066, 20102, 20114, 20144, 20166, 20196, 20206, 20230, 20258, 20284, 20302, 20326, 20354, 20358, 20384, 20416, 20452, 20492, 20494, 20500, 20532, 20566, 20596, 20628, 20642, 20644, 20654, 20658, 20660, 20678, 20684, 20714, 20734, 20736, 20756, 20776, 20798, 20830, 20864, 20874, 20908, 20922, 20956, 20980, 21014, 21032, 21056, 21064, 21098, 21138, 21140, 21174, 21200, 21202, 21212, 21242, 21250, 21274, 21292, 21318, 21328, 21364, 21398, 21434]
        // )).toEqual(387737770)
    });
})

// 46  612 1214 1416 1620  1 + 2 + 1 + 0 + 2   6
// 412 614 1216 1420       3 + 3 + 1 + 2       9
// 414 616 1220            4 + 3 + 3           10
// 416 620                 4 + 5               9
// 420                     6                   6
                                            40
