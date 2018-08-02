/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojchart'],
  function(oj, ko) {
     function ControllerViewModel() {
       var self = this;

      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("App Name");
      // User Info used in Global Navigation area
      self.userLogin = ko.observable("john.hancock@oracle.com");
      //var countries = ko.observable([]);

      var countries = "'Code'\t'Name'\t'Continent'\t'Region'\t'SurfaceArea'\t'IndepYear'\t'Population'\t'LifeExpectancy'\t'GNP'\t'GNPOld'\t'LocalName'\t'GovernmentForm'\t 'HeadOfState'\t'Capital'\t'Code2'\n'ABW'\t'Aruba'\t'North America'\t'Caribbean'\t193.00\tNULL\t103000\t78.4\t828.00\t793.00\t'Aruba'\t'Nonmetropolitan Territory of The Netherlands'\t'Beatrix'\t129\t'AW'\n'AFG'\t'Afghanistan'\t'Asia'\t'Southern and Central Asia'\t652090.00\t1919\t22720000\t45.9\t5976.00\tNULL\t'Afganistan/Afqanestan'\t'Islamic Emirate'\t'Mohammad Omar'\t1\t'AF'\n'AGO'\t'Angola'\t'Africa'\t'Central Africa'\t1246700.00\t1975\t12878000\t38.3\t6648.00\t7984.00\t'Angola'\t'Republic'\t'Jos� Eduardo dos Santos'\t56\t'AO'\n'AIA'\t'Anguilla'\t'North America'\t'Caribbean'\t96.00\tNULL\t8000\t76.1\t63.20\tNULL\t'Anguilla'\t'Dependent Territory of the UK'\t'Elisabeth II'\t62\t'AI'\n'ALB'\t'Albania'\t'Europe'\t'Southern Europe'\t28748.00\t1912\t3401200\t71.6\t3205.00\t2500.00\t'Shqip�ria'\t'Republic'\t'Rexhep Mejdani'\t34\t'AL'\n'AND'\t'Andorra'\t'Europe'\t'Southern Europe'\t468.00\t1278\t78000\t83.5\t1630.00\tNULL\t'Andorra'\t'Parliamentary Coprincipality'\t''\t55\t'AD'\n'ANT'\t'Netherlands Antilles'\t'North America'\t'Caribbean'\t800.00\tNULL\t217000\t74.7\t1941.00\tNULL\t'Nederlandse Antillen'\t'Nonmetropolitan Territory of The Netherlands'\t'Beatrix'\t33\t'AN'\n'ARE'\t'United Arab Emirates'\t'Asia'\t'Middle East'\t83600.00\t1971\t2441000\t74.1\t37966.00\t36846.00\t'Al-Imarat al-�Arabiya al-Muttahida'\t'Emirate Federation'\t'Zayid bin Sultan al-Nahayan'\t65\t'AE'\n'ARG'\t'Argentina'\t'South America'\t'South America'\t2780400.00\t1816\t37032000\t75.1\t340238.00\t323310.00\t'Argentina'\t'Federal Republic'\t'Fernando de la R�a'\t69\t'AR'\n'ARM'\t'Armenia'\t'Asia'\t'Middle East'\t29800.00\t1991\t3520000\t66.4\t1813.00\t1627.00\t'Hajastan'\t'Republic'\t'Robert Kot�arjan'\t126\t'AM'\n'ASM'\t'American Samoa'\t'Oceania'\t'Polynesia'\t199.00\tNULL\t68000\t75.1\t334.00\tNULL\t'Amerika Samoa'\t'US Territory'\t'George W. Bush'\t54\t'AS'\n'ATA'\t'Antarctica'\t'Antarctica'\t'Antarctica'\t13120000.00\tNULL\t0\tNULL\t0.00\tNULL\t'�'\t'Co-administrated'\t''\tNULL\t'AQ'\n'ATF'\t'French Southern territories'\t'Antarctica'\t'Antarctica'\t7780.00\tNULL\t0\tNULL\t0.00\tNULL\t'Terres australes fran�aises'\t'Nonmetropolitan Territory of France'\t'Jacques Chirac'\tNULL\t'TF'\n'ATG'\t'Antigua and Barbuda'\t'North America'\t'Caribbean'\t442.00\t1981\t68000\t70.5\t612.00\t584.00\t'Antigua and Barbuda'\t'Constitutional Monarchy'\t'Elisabeth II'\t63\t'AG'\n'AUS'\t'Australia'\t'Oceania'\t'Australia and New Zealand'\t7741220.00\t1901\t18886000\t79.8\t351182.00\t392911.00\t'Australia'\t'Constitutional Monarchy'\t'Elisabeth II'\t135\t'AU'\n'AUT'\t'Austria'\t'Europe'\t'Western Europe'\t83859.00\t1918\t8091800\t77.7\t211860.00\t206025.00\t'�sterreich'\t'Federal Republic'\t'Thomas Klestil'\t1523\t'AT'\n'AZE'\t'Azerbaijan'\t'Asia'\t'Middle East'\t86600.00\t1991\t7734000\t62.9\t4127.00\t4100.00\t'Az�rbaycan'\t'Federal Republic'\t'Heyd�r �liyev'\t144\t'AZ'\n'BDI'\t'Burundi'\t'Africa'\t'Eastern Africa'\t27834.00\t1962\t6695000\t46.2\t903.00\t982.00\t'Burundi/Uburundi'\t'Republic'\t'Pierre Buyoya'\t552\t'BI'\n'BEL'\t'Belgium'\t'Europe'\t'Western Europe'\t30518.00\t1830\t10239000\t77.8\t249704.00\t243948.00\t'Belgi�/Belgique'\t'Constitutional Monarchy'\t'Albert II'\t179\t'BE'\n'BEN'\t'Benin'\t'Africa'\t'Western Africa'\t112622.00\t1960\t6097000\t50.2\t2357.00\t2141.00\t'B�nin'\t'Republic'\t'Mathieu K�r�kou'\t187\t'BJ'\n'BFA'\t'Burkina Faso'\t'Africa'\t'Western Africa'\t274000.00\t1960\t11937000\t46.7\t2425.00\t2201.00\t'Burkina Faso'\t'Republic'\t'Blaise Compaor�'\t549\t'BF'\n'BGD'\t'Bangladesh'\t'Asia'\t'Southern and Central Asia'\t143998.00\t1971\t129155000\t60.2\t32852.00\t31966.00\t'Bangladesh'\t'Republic'\t'Shahabuddin Ahmad'\t150\t'BD'\n'BGR'\t'Bulgaria'\t'Europe'\t'Eastern Europe'\t110994.00\t1908\t8190900\t70.9\t12178.00\t10169.00\t'Balgarija'\t'Republic'\t'Petar Stojanov'\t539\t'BG'\n'BHR'\t'Bahrain'\t'Asia'\t'Middle East'\t694.00\t1971\t617000\t73.0\t6366.00\t6097.00\t'Al-Bahrayn'\t'Monarchy (Emirate)'\t'Hamad ibn Isa al-Khalifa'\t149\t'BH'\n'BHS'\t'Bahamas'\t'North America'\t'Caribbean'\t13878.00\t1973\t307000\t71.1\t3527.00\t3347.00\t'The Bahamas'\t'Constitutional Monarchy'\t'Elisabeth II'\t148\t'BS'\n'BIH'\t'Bosnia and Herzegovina'\t'Europe'\t'Southern Europe'\t51197.00\t1992\t3972000\t71.5\t2841.00\tNULL\t'Bosna i Hercegovina'\t'Federal Republic'\t'Ante Jelavic'\t201\t'BA'\n'BLR'\t'Belarus'\t'Europe'\t'Eastern Europe'\t207600.00\t1991\t10236000\t68.0\t13714.00\tNULL\t'Belarus'\t'Republic'\t'Aljaksandr Luka�enka'\t3520\t'BY'\n'BLZ'\t'Belize'\t'North America'\t'Central America'\t22696.00\t1981\t241000\t70.9\t630.00\t616.00\t'Belize'\t'Constitutional Monarchy'\t'Elisabeth II'\t185\t'BZ'\n'BMU'\t'Bermuda'\t'North America'\t'North America'\t53.00\tNULL\t65000\t76.9\t2328.00\t2190.00\t'Bermuda'\t'Dependent Territory of the UK'\t'Elisabeth II'\t191\t'BM'\n'BOL'\t'Bolivia'\t'South America'\t'South America'\t1098581.00\t1825\t8329000\t63.7\t8571.00\t7967.00\t'Bolivia'\t'Republic'\t'Hugo B�nzer Su�rez'\t194\t'BO'\n'BRA'\t'Brazil'\t'South America'\t'South America'\t8547403.00\t1822\t170115000\t62.9\t776739.00\t804108.00\t'Brasil'\t'Federal Republic'\t'Fernando Henrique Cardoso'\t211\t'BR'\n'BRB'\t'Barbados'\t'North America'\t'Caribbean'\t430.00\t1966\t270000\t73.0\t2223.00\t2186.00\t'Barbados'\t'Constitutional Monarchy'\t'Elisabeth II'\t174\t'BB'\n'BRN'\t'Brunei'\t'Asia'\t'Southeast Asia'\t5765.00\t1984\t328000\t73.6\t11705.00\t12460.00\t'Brunei Darussalam'\t'Monarchy (Sultanate)'\t'Haji Hassan al-Bolkiah'\t538\t'BN'\n'BTN'\t'Bhutan'\t'Asia'\t'Southern and Central Asia'\t47000.00\t1910\t2124000\t52.4\t372.00\t383.00\t'Druk-Yul'\t'Monarchy'\t'Jigme Singye Wangchuk'\t192\t'BT'\n'BVT'\t'Bouvet Island'\t'Antarctica'\t'Antarctica'\t59.00\tNULL\t0\tNULL\t0.00\tNULL\t'Bouvet�ya'\t'Dependent Territory of Norway'\t'Harald V'\tNULL\t'BV'\n'BWA'\t'Botswana'\t'Africa'\t'Southern Africa'\t581730.00\t1966\t1622000\t39.3\t4834.00\t4935.00\t'Botswana'\t'Republic'\t'Festus G. Mogae'\t204\t'BW'\n'CAF'\t'Central African Republic'\t'Africa'\t'Central Africa'\t622984.00\t1960\t3615000\t44.0\t1054.00\t993.00\t'Centrafrique/B�-Afr�ka'\t'Republic'\t'Ange-F�lix Patass�'\t1889\t'CF'\n'CAN'\t'Canada'\t'North America'\t'North America'\t9970610.00\t1867\t31147000\t79.4\t598862.00\t625626.00\t'Canada'\t'Constitutional Monarchy'\t'Elisabeth II'\t1822\t'CA'\n'CCK'\t'Cocos (Keeling) Islands'\t'Oceania'\t'Australia and New Zealand'\t14.00\tNULL\t600\tNULL\t0.00\tNULL\t'Cocos (Keeling) Islands'\t'Territory of Australia'\t'Elisabeth II'\t2317\t'CC'\n'CHE'\t'Switzerland'\t'Europe'\t'Western Europe'\t41284.00\t1499\t7160400\t79.6\t264478.00\t256092.00\t'Schweiz/Suisse/Svizzera/Svizra'\t'Federation'\t'Adolf Ogi'\t3248\t'CH'\n'CHL'\t'Chile'\t'South America'\t'South America'\t756626.00\t1810\t15211000\t75.7\t72949.00\t75780.00\t'Chile'\t'Republic'\t'Ricardo Lagos Escobar'\t554\t'CL'\n'CHN'\t'China'\t'Asia'\t'Eastern Asia'\t9572900.00\t-1523\t1277558000\t71.4\t982268.00\t917719.00\t'Zhongquo'\t'People\'sRepublic'\t'Jiang Zemin'\t1891\t'CN'\n'CIV'\t'C�te d�Ivoire'\t'Africa'\t'Western Africa'\t322463.00\t1960\t14786000\t45.2\t11345.00\t10285.00\t'C�te d�Ivoire'\t'Republic'\t'Laurent Gbagbo'\t2814\t'CI'\n'CMR'\t'Cameroon'\t'Africa'\t'Central Africa'\t475442.00\t1960\t15085000\t54.8\t9174.00\t8596.00\t'Cameroun/Cameroon'\t'Republic'\t'Paul Biya'\t1804\t'CM'\n'COD'\t' The Democratic Republic of the Congo'\t'Africa'\t'Central Africa'\t2344858.00\t1960\t51654000\t48.8\t6964.00\t2474.00\t'R�publique D�mocratique du Congo'\t'Republic'\t'Joseph Kabila'\t2298\t'CD'\n'COG'\t'Congo'\t'Africa'\t'Central Africa'\t342000.00\t1960\t2943000\t47.4\t2108.00\t2287.00\t'Congo'\t'Republic'\t'Denis Sassou-Nguesso'\t2296\t'CG'\n'COK'\t'Cook Islands'\t'Oceania'\t'Polynesia'\t236.00\tNULL\t20000\t71.1\t100.00\tNULL\t'The Cook Islands'\t'Nonmetropolitan Territory of New Zealand'\t'Elisabeth II'\t583\t'CK'\n'COL'\t'Colombia'\t'South America'\t'South America'\t1138914.00\t1810\t42321000\t70.3\t102896.00\t105116.00\t'Colombia'\t'Republic'\t'Andr�s Pastrana Arango'\t2257\t'CO'\n'COM'\t'Comoros'\t'Africa'\t'Eastern Africa'\t1862.00\t1975\t578000\t60.0\t4401.00\t4361.00\t'Komori/Comores'\t'Republic'\t'Azali Assoumani'\t2295\t'KM'\n'CPV'\t'Cape Verde'\t'Africa'\t'Western Africa'\t4033.00\t1975\t428000\t68.9\t435.00\t420.00\t'Cabo Verde'\t'Republic'\t'Ant�nio Mascarenhas Monteiro'\t1859\t'CV'\n'CRI'\t'Costa Rica'\t'North America'\t'Central America'\t51100.00\t1821\t4023000\t75.8\t10226.00\t9757.00\t'Costa Rica'\t'Republic'\t'Miguel �ngel Rodr�guez Echeverr�a'\t584\t'CR'\n'CUB'\t'Cuba'\t'North America'\t'Caribbean'\t110861.00\t1902\t11201000\t76.2\t17843.00\t18862.00\t'Cuba'\t'Socialistic Republic'\t'Fidel Castro Ruz'\t2413\t'CU'\n'CXR'\t'Christmas Island'\t'Oceania'\t'Australia and New Zealand'\t135.00\tNULL\t2500\tNULL\t0.00\tNULL\t'Christmas Island'\t'Territory of Australia'\t'Elisabeth II'\t1791\t'CX'\n'CYM'\t'Cayman Islands'\t'North America'\t'Caribbean'\t264.00\tNULL\t38000\t78.9\t1263.00\t1186.00\t'Cayman Islands'\t'Dependent Territory of the UK'\t'Elisabeth II'\t553\t'KY'\n'CYP'\t'Cyprus'\t'Asia'\t'Middle East'\t9251.00\t1960\t754700\t76.7\t9333.00\t8246.00\t'K�pros/Kibris'\t'Republic'\t'Glafkos Klerides'\t2430\t'CY'\n'CZE'\t'Czech Republic'\t'Europe'\t'Eastern Europe'\t78866.00\t1993\t10278100\t74.5\t55017.00\t52037.00\t'�esko'\t'Republic'\t'V�clav Havel'\t3339\t'CZ'\n'DEU'\t'Germany'\t'Europe'\t'Western Europe'\t357022.00\t1955\t82164700\t77.4\t2133367.00\t2102826.00\t'Deutschland'\t'Federal Republic'\t'Johannes Rau'\t3068\t'DE'\n'DJI'\t'Djibouti'\t'Africa'\t'Eastern Africa'\t23200.00\t1977\t638000\t50.8\t382.00\t373.00\t'Djibouti/Jibuti'\t'Republic'\t'Ismail Omar Guelleh'\t585\t'DJ'\n'DMA'\t'Dominica'\t'North America'\t'Caribbean'\t751.00\t1978\t71000\t73.4\t256.00\t243.00\t'Dominica'\t'Republic'\t'Vernon Shaw'\t586\t'DM'\n'DNK'\t'Denmark'\t'Europe'\t'Nordic Countries'\t43094.00\t800\t5330000\t76.5\t174099.00\t169264.00\t'Danmark'\t'Constitutional Monarchy'\t'Margrethe II'\t3315\t'DK'\n'DOM'\t'Dominican Republic'\t'North America'\t'Caribbean'\t48511.00\t1844\t8495000\t73.2\t15846.00\t15076.00\t'Rep�blica Dominicana'\t'Republic'\t'Hip�lito Mej�a Dom�nguez'\t587\t'DO'\n'DZA'\t'Algeria'\t'Africa'\t'Northern Africa'\t2381741.00\t1962\t31471000\t69.7\t49982.00\t46966.00\t'Al-Jaza�ir/Alg�rie'\t'Republic'\t'Abdelaziz Bouteflika'\t35\t'DZ'\n'ECU'\t'Ecuador'\t'South America'\t'South America'\t283561.00\t1822\t12646000\t71.1\t19770.00\t19769.00\t'Ecuador'\t'Republic'\t'Gustavo Noboa Bejarano'\t594\t'EC'\n'EGY'\t'Egypt'\t'Africa'\t'Northern Africa'\t1001449.00\t1922\t68470000\t63.3\t82710.00\t75617.00\t'Misr'\t'Republic'\t'Hosni Mubarak'\t608\t'EG'\n'ERI'\t'Eritrea'\t'Africa'\t'Eastern Africa'\t117600.00\t1993\t3850000\t55.8\t650.00\t755.00\t'Ertra'\t'Republic'\t'Isayas Afewerki [Isaias Afwerki]'\t652\t'ER'\n'ESH'\t'Western Sahara'\t'Africa'\t'Northern Africa'\t266000.00\tNULL\t293000\t49.8\t60.00\tNULL\t'As-Sahrawiya'\t'Occupied by Marocco'\t'Mohammed Abdel Aziz'\t2453\t'EH'\n'ESP'\t'Spain'\t'Europe'\t'Southern Europe'\t505992.00\t1492\t39441700\t78.8\t553233.00\t532031.00\t'Espa�a'\t'Constitutional Monarchy'\t'Juan Carlos I'\t653\t'ES'\n'EST'\t'Estonia'\t'Europe'\t'Baltic Countries'\t45227.00\t1991\t1439200\t69.5\t5328.00\t3371.00\t'Eesti'\t'Republic'\t'Lennart Meri'\t3791\t'EE'\n'ETH'\t'Ethiopia'\t'Africa'\t'Eastern Africa'\t1104300.00\t-1000\t62565000\t45.2\t6353.00\t6180.00\t'YeItyop�iya'\t'Republic'\t'Negasso Gidada'\t756\t'ET'\n'FIN'\t'Finland'\t'Europe'\t'Nordic Countries'\t338145.00\t1917\t5171300\t77.4\t121914.00\t119833.00\t'Suomi'\t'Republic'\t'Tarja Halonen'\t3236\t'FI'\n'FJI'\t'Fiji Islands'\t'Oceania'\t'Melanesia'\t18274.00\t1970\t817000\t67.9\t1536.00\t2149.00\t'Fiji Islands'\t'Republic'\t'Josefa Iloilo'\t764\t'FJ'\n'FLK'\t'Falkland Islands'\t'South America'\t'South America'\t12173.00\tNULL\t2000\tNULL\t0.00\tNULL\t'Falkland Islands'\t'Dependent Territory of the UK'\t'Elisabeth II'\t763\t'FK'\n'FRA'\t'France'\t'Europe'\t'Western Europe'\t551500.00\t843\t59225700\t78.8\t1424285.00\t1392448.00\t'France'\t'Republic'\t'Jacques Chirac'\t2974\t'FR'\n'FRO'\t'Faroe Islands'\t'Europe'\t'Nordic Countries'\t1399.00\tNULL\t43000\t78.4\t0.00\tNULL\t'F�royar'\t'Part of Denmark'\t'Margrethe II'\t901\t'FO'\n'FSM'\t' Federated States of Micronesia'\t'Oceania'\t'Micronesia'\t702.00\t1990\t119000\t68.6\t212.00\tNULL\t'Micronesia'\t'Federal Republic'\t'Leo A. Falcam'\t2689\t'FM'\n'GAB'\t'Gabon'\t'Africa'\t'Central Africa'\t267668.00\t1960\t1226000\t50.1\t5493.00\t5279.00\t'Le Gabon'\t'Republic'\t'Omar Bongo'\t902\t'GA'\n'GBR'\t'United Kingdom'\t'Europe'\t'British Islands'\t242900.00\t1066\t59623400\t77.7\t1378330.00\t1296830.00\t'United Kingdom'\t'Constitutional Monarchy'\t'Elisabeth II'\t456\t'GB'\n'GEO'\t'Georgia'\t'Asia'\t'Middle East'\t69700.00\t1991\t4968000\t64.5\t6064.00\t5924.00\t'Sakartvelo'\t'Republic'\t'Eduard �evardnadze'\t905\t'GE'\n'GHA'\t'Ghana'\t'Africa'\t'Western Africa'\t238533.00\t1957\t20212000\t57.4\t7137.00\t6884.00\t'Ghana'\t'Republic'\t'John Kufuor'\t910\t'GH'\n'GIB'\t'Gibraltar'\t'Europe'\t'Southern Europe'\t6.00\tNULL\t25000\t79.0\t258.00\tNULL\t'Gibraltar'\t'Dependent Territory of the UK'\t'Elisabeth II'\t915\t'GI'\n'GIN'\t'Guinea'\t'Africa'\t'Western Africa'\t245857.00\t1958\t7430000\t45.6\t2352.00\t2383.00\t'Guin�e'\t'Republic'\t'Lansana Cont�'\t926\t'GN'\n'GLP'\t'Guadeloupe'\t'North America'\t'Caribbean'\t1705.00\tNULL\t456000\t77.0\t3501.00\tNULL\t'Guadeloupe'\t'Overseas Department of France'\t'Jacques Chirac'\t919\t'GP'\n'GMB'\t'Gambia'\t'Africa'\t'Western Africa'\t11295.00\t1965\t1305000\t53.2\t320.00\t325.00\t'The Gambia'\t'Republic'\t'Yahya Jammeh'\t904\t'GM'\n'GNB'\t'Guinea-Bissau'\t'Africa'\t'Western Africa'\t36125.00\t1974\t1213000\t49.0\t293.00\t272.00\t'Guin�-Bissau'\t'Republic'\t'Kumba Ial�'\t927\t'GW'\n'GNQ'\t'Equatorial Guinea'\t'Africa'\t'Central Africa'\t28051.00\t1968\t453000\t53.6\t283.00\t542.00\t'Guinea Ecuatorial'\t'Republic'\t'Teodoro Obiang Nguema Mbasogo'\t2972\t'GQ'\n'GRC'\t'Greece'\t'Europe'\t'Southern Europe'\t131626.00\t1830\t10545700\t78.4\t120724.00\t119946.00\t'Ell�da'\t'Republic'\t'Kostis Stefanopoulos'\t2401\t'GR'\n'GRD'\t'Grenada'\t'North America'\t'Caribbean'\t344.00\t1974\t94000\t64.5\t318.00\tNULL\t'Grenada'\t'Constitutional Monarchy'\t'Elisabeth II'\t916\t'GD'\n'GRL'\t'Greenland'\t'North America'\t'North America'\t2166090.00\tNULL\t56000\t68.1\t0.00\tNULL\t'Kalaallit Nunaat/Gr�nland'\t'Part of Denmark'\t'Margrethe II'\t917\t'GL'\n'GTM'\t'Guatemala'\t'North America'\t'Central America'\t108889.00\t1821\t11385000\t66.2\t19008.00\t17797.00\t'Guatemala'\t'Republic'\t'Alfonso Portillo Cabrera'\t922\t'GT'\n'GUF'\t'French Guiana'\t'South America'\t'South America'\t90000.00\tNULL\t181000\t76.1\t681.00\tNULL\t'Guyane fran�aise'\t'Overseas Department of France'\t'Jacques Chirac'\t3014\t'GF'\n'GUM'\t'Guam'\t'Oceania'\t'Micronesia'\t549.00\tNULL\t168000\t77.8\t1197.00\t1136.00\t'Guam'\t'US Territory'\t'George W. Bush'\t921\t'GU'\n'GUY'\t'Guyana'\t'South America'\t'South America'\t214969.00\t1966\t861000\t64.0\t722.00\t743.00\t'Guyana'\t'Republic'\t'Bharrat Jagdeo'\t928\t'GY'\n'HKG'\t'Hong Kong'\t'Asia'\t'Eastern Asia'\t1075.00\tNULL\t6782000\t79.5\t166448.00\t173610.00\t'Xianggang/Hong Kong'\t'Special Administrative Region of China'\t'Jiang Zemin'\t937\t'HK'\n'HMD'\t'Heard Island and McDonald Islands'\t'Antarctica'\t'Antarctica'\t359.00\tNULL\t0\tNULL\t0.00\tNULL\t'Heard and McDonald Islands'\t'Territory of Australia'\t'Elisabeth II'\tNULL\t'HM'\n'HND'\t'Honduras'\t'North America'\t'Central America'\t112088.00\t1838\t6485000\t69.9\t5333.00\t4697.00\t'Honduras'\t'Republic'\t'Carlos Roberto Flores Facuss�'\t933\t'HN'\n'HRV'\t'Croatia'\t'Europe'\t'Southern Europe'\t56538.00\t1991\t4473000\t73.7\t20208.00\t19300.00\t'Hrvatska'\t'Republic'\t'�tipe Mesic'\t2409\t'HR'\n'HTI'\t'Haiti'\t'North America'\t'Caribbean'\t27750.00\t1804\t8222000\t49.2\t3459.00\t3107.00\t'Ha�ti/Dayti'\t'Republic'\t'Jean-Bertrand Aristide'\t929\t'HT'\n'HUN'\t'Hungary'\t'Europe'\t'Eastern Europe'\t93030.00\t1918\t10043200\t71.4\t48267.00\t45914.00\t'Magyarorsz�g'\t'Republic'\t'Ferenc M�dl'\t3483\t'HU'\n'IDN'\t'Indonesia'\t'Asia'\t'Southeast Asia'\t1904569.00\t1945\t212107000\t68.0\t84982.00\t215002.00\t'Indonesia'\t'Republic'\t'Abdurrahman Wahid'\t939\t'ID'\n'IND'\t'India'\t'Asia'\t'Southern and Central Asia'\t3287263.00\t1947\t1013662000\t62.5\t447114.00\t430572.00\t'Bharat/India'\t'Federal Republic'\t'Kocheril Raman Narayanan'\t1109\t'IN'\n'IOT'\t'British Indian Ocean Territory'\t'Africa'\t'Eastern Africa'\t78.00\tNULL\t0\tNULL\t0.00\tNULL\t'British Indian Ocean Territory'\t'Dependent Territory of the UK'\t'Elisabeth II'\tNULL\t'IO'\n'IRL'\t'Ireland'\t'Europe'\t'British Islands'\t70273.00\t1921\t3775100\t76.8\t75921.00\t73132.00\t'Ireland/�ire'\t'Republic'\t'Mary McAleese'\t1447\t'IE'\n'IRN'\t'Iran'\t'Asia'\t'Southern and Central Asia'\t1648195.00\t1906\t67702000\t69.7\t195746.00\t160151.00\t'Iran'\t'Islamic Republic'\t'Ali Mohammad Khatami-Ardakani'\t1380\t'IR'\n'IRQ'\t'Iraq'\t'Asia'\t'Middle East'\t438317.00\t1932\t23115000\t66.5\t11500.00\tNULL\t'Al-�Iraq'\t'Republic'\t'Saddam Hussein al-Takriti'\t1365\t'IQ'\n'ISL'\t'Iceland'\t'Europe'\t'Nordic Countries'\t103000.00\t1944\t279000\t79.4\t8255.00\t7474.00\t'�sland'\t'Republic'\t'�lafur Ragnar Gr�msson'\t1449\t'IS'\n'ISR'\t'Israel'\t'Asia'\t'Middle East'\t21056.00\t1948\t6217000\t78.6\t97477.00\t98577.00\t'Yisra�el/Isra�il'\t'Republic'\t'Moshe Katzav'\t1450\t'IL'\n'ITA'\t'Italy'\t'Europe'\t'Southern Europe'\t301316.00\t1861\t57680000\t79.0\t1161755.00\t1145372.00\t'Italia'\t'Republic'\t'Carlo Azeglio Ciampi'\t1464\t'IT'\n'JAM'\t'Jamaica'\t'North America'\t'Caribbean'\t10990.00\t1962\t2583000\t75.2\t6871.00\t6722.00\t'Jamaica'\t'Constitutional Monarchy'\t'Elisabeth II'\t1530\t'JM'\n'JOR'\t'Jordan'\t'Asia'\t'Middle East'\t88946.00\t1946\t5083000\t77.4\t7526.00\t7051.00\t'Al-Urdunn'\t'Constitutional Monarchy'\t'Abdullah II'\t1786\t'JO'\n'JPN'\t'Japan'\t'Asia'\t'Eastern Asia'\t377829.00\t-660\t126714000\t80.7\t3787042.00\t4192638.00\t'Nihon/Nippon'\t'Constitutional Monarchy'\t'Akihito'\t1532\t'JP'\n'KAZ'\t'Kazakstan'\t'Asia'\t'Southern and Central Asia'\t2724900.00\t1991\t16223000\t63.2\t24375.00\t23383.00\t'Qazaqstan'\t'Republic'\t'Nursultan Nazarbajev'\t1864\t'KZ'\n'KEN'\t'Kenya'\t'Africa'\t'Eastern Africa'\t580367.00\t1963\t30080000\t48.0\t9217.00\t10241.00\t'Kenya'\t'Republic'\t'Daniel arap Moi'\t1881\t'KE'\n'KGZ'\t'Kyrgyzstan'\t'Asia'\t'Southern and Central Asia'\t199900.00\t1991\t4699000\t63.4\t1626.00\t1767.00\t'Kyrgyzstan'\t'Republic'\t'Askar Akajev'\t2253\t'KG'\n'KHM'\t'Cambodia'\t'Asia'\t'Southeast Asia'\t181035.00\t1953\t11168000\t56.5\t5121.00\t5670.00\t'K�mpuch�a'\t'Constitutional Monarchy'\t'Norodom Sihanouk'\t1800\t'KH'\n'KIR'\t'Kiribati'\t'Oceania'\t'Micronesia'\t726.00\t1979\t83000\t59.8\t40.70\tNULL\t'Kiribati'\t'Republic'\t'Teburoro Tito'\t2256\t'KI'\n'KNA'\t'Saint Kitts and Nevis'\t'North America'\t'Caribbean'\t261.00\t1983\t38000\t70.7\t299.00\tNULL\t'Saint Kitts and Nevis'\t'Constitutional Monarchy'\t'Elisabeth II'\t3064\t'KN'\n'KOR'\t'South Korea'\t'Asia'\t'Eastern Asia'\t99434.00\t1948\t46844000\t74.4\t320749.00\t442544.00\t'Taehan Min�guk (Namhan)'\t'Republic'\t'Kim Dae-jung'\t2331\t'KR'\n'KWT'\t'Kuwait'\t'Asia'\t'Middle East'\t17818.00\t1961\t1972000\t76.1\t27037.00\t30373.00\t'Al-Kuwayt'\t'Constitutional Monarchy (Emirate)'\t'Jabir al-Ahmad al-Jabir al-Sabah'\t2429\t'KW'\n'LAO'\t'Laos'\t'Asia'\t'Southeast Asia'\t236800.00\t1953\t5433000\t53.1\t1292.00\t1746.00\t'Lao'\t'Republic'\t'Khamtay Siphandone'\t2432\t'LA'\n'LBN'\t'Lebanon'\t'Asia'\t'Middle East'\t10400.00\t1941\t3282000\t71.3\t17121.00\t15129.00\t'Lubnan'\t'Republic'\t'�mile Lahoud'\t2438\t'LB'\n'LBR'\t'Liberia'\t'Africa'\t'Western Africa'\t111369.00\t1847\t3154000\t51.0\t2012.00\tNULL\t'Liberia'\t'Republic'\t'Charles Taylor'\t2440\t'LR'\n'LBY'\t'Libyan Arab Jamahiriya'\t'Africa'\t'Northern Africa'\t1759540.00\t1951\t5605000\t75.5\t44806.00\t40562.00\t'Libiya'\t'Socialistic State'\t'Muammar al-Qadhafi'\t2441\t'LY'\n'LCA'\t'Saint Lucia'\t'North America'\t'Caribbean'\t622.00\t1979\t154000\t72.3\t571.00\tNULL\t'Saint Lucia'\t'Constitutional Monarchy'\t'Elisabeth II'\t3065\t'LC'\n'LIE'\t'Liechtenstein'\t'Europe'\t'Western Europe'\t160.00\t1806\t32300\t78.8\t1119.00\t1084.00\t'Liechtenstein'\t'Constitutional Monarchy'\t'Hans-Adam II'\t2446\t'LI'\n'LKA'\t'Sri Lanka'\t'Asia'\t'Southern and Central Asia'\t65610.00\t1948\t18827000\t71.8\t15706.00\t15091.00\t'Sri Lanka/Ilankai'\t'Republic'\t'Chandrika Kumaratunga'\t3217\t'LK'\n'LSO'\t'Lesotho'\t'Africa'\t'Southern Africa'\t30355.00\t1966\t2153000\t50.8\t1061.00\t1161.00\t'Lesotho'\t'Constitutional Monarchy'\t'Letsie III'\t2437\t'LS'\n'LTU'\t'Lithuania'\t'Europe'\t'Baltic Countries'\t65301.00\t1991\t3698500\t69.1\t10692.00\t9585.00\t'Lietuva'\t'Republic'\t'Valdas Adamkus'\t2447\t'LT'\n'LUX'\t'Luxembourg'\t'Europe'\t'Western Europe'\t2586.00\t1867\t435700\t77.1\t16321.00\t15519.00\t'Luxembourg/L�tzebuerg'\t'Constitutional Monarchy'\t'Henri'\t2452\t'LU'\n'LVA'\t'Latvia'\t'Europe'\t'Baltic Countries'\t64589.00\t1991\t2424200\t68.4\t6398.00\t5639.00\t'Latvija'\t'Republic'\t'Vaira Vike-Freiberga'\t2434\t'LV'\n'MAC'\t'Macao'\t'Asia'\t'Eastern Asia'\t18.00\tNULL\t473000\t81.6\t5749.00\t5940.00\t'Macau/Aomen'\t'Special Administrative Region of China'\t'Jiang Zemin'\t2454\t'MO'\n'MAR'\t'Morocco'\t'Africa'\t'Northern Africa'\t446550.00\t1956\t28351000\t69.1\t36124.00\t33514.00\t'Al-Maghrib'\t'Constitutional Monarchy'\t'Mohammed VI'\t2486\t'MA'\n'MCO'\t'Monaco'\t'Europe'\t'Western Europe'\t1.50\t1861\t34000\t78.8\t776.00\tNULL\t'Monaco'\t'Constitutional Monarchy'\t'Rainier III'\t2695\t'MC'\n'MDA'\t'Moldova'\t'Europe'\t'Eastern Europe'\t33851.00\t1991\t4380000\t64.5\t1579.00\t1872.00\t'Moldova'\t'Republic'\t'Vladimir Voronin'\t2690\t'MD'\n'MDG'\t'Madagascar'\t'Africa'\t'Eastern Africa'\t587041.00\t1960\t15942000\t55.0\t3750.00\t3545.00\t'Madagasikara/Madagascar'\t'Federal Republic'\t'Didier Ratsiraka'\t2455\t'MG'\n'MDV'\t'Maldives'\t'Asia'\t'Southern and Central Asia'\t298.00\t1965\t286000\t62.2\t199.00\tNULL\t'Dhivehi Raajje/Maldives'\t'Republic'\t'Maumoon Abdul Gayoom'\t2463\t'MV'\n'MEX'\t'Mexico'\t'North America'\t'Central America'\t1958201.00\t1810\t98881000\t71.5\t414972.00\t401461.00\t'M�xico'\t'Federal Republic'\t'Vicente Fox Quesada'\t2515\t'MX'\n'MHL'\t'Marshall Islands'\t'Oceania'\t'Micronesia'\t181.00\t1990\t64000\t65.5\t97.00\tNULL\t'Marshall Islands/Majol'\t'Republic'\t'Kessai Note'\t2507\t'MH'\n'MKD'\t'Macedonia'\t'Europe'\t'Southern Europe'\t25713.00\t1991\t2024000\t73.8\t1694.00\t1915.00\t'Makedonija'\t'Republic'\t'Boris Trajkovski'\t2460\t'MK'\n'MLI'\t'Mali'\t'Africa'\t'Western Africa'\t1240192.00\t1960\t11234000\t46.7\t2642.00\t2453.00\t'Mali'\t'Republic'\t'Alpha Oumar Konar�'\t2482\t'ML'\n'MLT'\t'Malta'\t'Europe'\t'Southern Europe'\t316.00\t1964\t380200\t77.9\t3512.00\t3338.00\t'Malta'\t'Republic'\t'Guido de Marco'\t2484\t'MT'\n'MMR'\t'Myanmar'\t'Asia'\t'Southeast Asia'\t676578.00\t1948\t45611000\t54.9\t180375.00\t171028.00\t'Myanma Pye'\t'Republic'\t'kenraali Than Shwe'\t2710\t'MM'\n'MNG'\t'Mongolia'\t'Asia'\t'Eastern Asia'\t1566500.00\t1921\t2662000\t67.3\t1043.00\t933.00\t'Mongol Uls'\t'Republic'\t'Natsagiin Bagabandi'\t2696\t'MN'\n'MNP'\t'Northern Mariana Islands'\t'Oceania'\t'Micronesia'\t464.00\tNULL\t78000\t75.5\t0.00\tNULL\t'Northern Mariana Islands'\t'Commonwealth of the US'\t'George W. Bush'\t2913\t'MP'\n'MOZ'\t'Mozambique'\t'Africa'\t'Eastern Africa'\t801590.00\t1975\t19680000\t37.5\t2891.00\t2711.00\t'Mo�ambique'\t'Republic'\t'Joaqu�m A. Chissano'\t2698\t'MZ'\n'MRT'\t'Mauritania'\t'Africa'\t'Western Africa'\t1025520.00\t1960\t2670000\t50.8\t998.00\t1081.00\t'Muritaniya/Mauritanie'\t'Republic'\t'Maaouiya Ould Sid�Ahmad Taya'\t2509\t'MR'\n'MSR'\t'Montserrat'\t'North America'\t'Caribbean'\t102.00\tNULL\t11000\t78.0\t109.00\tNULL\t'Montserrat'\t'Dependent Territory of the UK'\t'Elisabeth II'\t2697\t'MS'\n'MTQ'\t'Martinique'\t'North America'\t'Caribbean'\t1102.00\tNULL\t395000\t78.3\t2731.00\t2559.00\t'Martinique'\t'Overseas Department of France'\t'Jacques Chirac'\t2508\t'MQ'\n'MUS'\t'Mauritius'\t'Africa'\t'Eastern Africa'\t2040.00\t1968\t1158000\t71.0\t4251.00\t4186.00\t'Mauritius'\t'Republic'\t'Cassam Uteem'\t2511\t'MU'\n'MWI'\t'Malawi'\t'Africa'\t'Eastern Africa'\t118484.00\t1964\t10925000\t37.6\t1687.00\t2527.00\t'Malawi'\t'Republic'\t'Bakili Muluzi'\t2462\t'MW'\n'MYS'\t'Malaysia'\t'Asia'\t'Southeast Asia'\t329758.00\t1957\t22244000\t70.8\t69213.00\t97884.00\t'Malaysia'\t'Constitutional Monarchy'\t'Salahuddin Abdul Aziz Shah Alhaj'\t2464\t'MY'\n'MYT'\t'Mayotte'\t'Africa'\t'Eastern Africa'\t373.00\tNULL\t149000\t59.5\t0.00\tNULL\t'Mayotte'\t'Territorial Collectivity of France'\t'Jacques Chirac'\t2514\t'YT'\n'NAM'\t'Namibia'\t'Africa'\t'Southern Africa'\t824292.00\t1990\t1726000\t42.5\t3101.00\t3384.00\t'Namibia'\t'Republic'\t'Sam Nujoma'\t2726\t'NA'\n'NCL'\t'New Caledonia'\t'Oceania'\t'Melanesia'\t18575.00\tNULL\t214000\t72.8\t3563.00\tNULL\t'Nouvelle-Cal�donie'\t'Nonmetropolitan Territory of France'\t'Jacques Chirac'\t3493\t'NC'\n'NER'\t'Niger'\t'Africa'\t'Western Africa'\t1267000.00\t1960\t10730000\t41.3\t1706.00\t1580.00\t'Niger'\t'Republic'\t'Mamadou Tandja'\t2738\t'NE'\n'NFK'\t'Norfolk Island'\t'Oceania'\t'Australia and New Zealand'\t36.00\tNULL\t2000\tNULL\t0.00\tNULL\t'Norfolk Island'\t'Territory of Australia'\t'Elisabeth II'\t2806\t'NF'\n'NGA'\t'Nigeria'\t'Africa'\t'Western Africa'\t923768.00\t1960\t111506000\t51.6\t65707.00\t58623.00\t'Nigeria'\t'Federal Republic'\t'Olusegun Obasanjo'\t2754\t'NG'\n'NIC'\t'Nicaragua'\t'North America'\t'Central America'\t130000.00\t1838\t5074000\t68.7\t1988.00\t2023.00\t'Nicaragua'\t'Republic'\t'Arnoldo Alem�n Lacayo'\t2734\t'NI'\n'NIU'\t'Niue'\t'Oceania'\t'Polynesia'\t260.00\tNULL\t2000\tNULL\t0.00\tNULL\t'Niue'\t'Nonmetropolitan Territory of New Zealand'\t'Elisabeth II'\t2805\t'NU'\n'NLD'\t'Netherlands'\t'Europe'\t'Western Europe'\t41526.00\t1581\t15864000\t78.3\t371362.00\t360478.00\t'Nederland'\t'Constitutional Monarchy'\t'Beatrix'\t5\t'NL'\n'NOR'\t'Norway'\t'Europe'\t'Nordic Countries'\t323877.00\t1905\t4478500\t78.7\t145895.00\t153370.00\t'Norge'\t'Constitutional Monarchy'\t'Harald V'\t2807\t'NO'\n'NPL'\t'Nepal'\t'Asia'\t'Southern and Central Asia'\t147181.00\t1769\t23930000\t57.8\t4768.00\t4837.00\t'Nepal'\t'Constitutional Monarchy'\t'Gyanendra Bir Bikram'\t2729\t'NP'\n'NRU'\t'Nauru'\t'Oceania'\t'Micronesia'\t21.00\t1968\t12000\t60.8\t197.00\tNULL\t'Naoero/Nauru'\t'Republic'\t'Bernard Dowiyogo'\t2728\t'NR'\n'NZL'\t'New Zealand'\t'Oceania'\t'Australia and New Zealand'\t270534.00\t1907\t3862000\t77.8\t54669.00\t64960.00\t'New Zealand/Aotearoa'\t'Constitutional Monarchy'\t'Elisabeth II'\t3499\t'NZ'\n'OMN'\t'Oman'\t'Asia'\t'Middle East'\t309500.00\t1951\t2542000\t71.8\t16904.00\t16153.00\t'�Uman'\t'Monarchy (Sultanate)'\t'Qabus ibn Sa�id'\t2821\t'OM'\n'PAK'\t'Pakistan'\t'Asia'\t'Southern and Central Asia'\t796095.00\t1947\t156483000\t61.1\t61289.00\t58549.00\t'Pakistan'\t'Republic'\t'Mohammad Rafiq Tarar'\t2831\t'PK'\n'PAN'\t'Panama'\t'North America'\t'Central America'\t75517.00\t1903\t2856000\t75.5\t9131.00\t8700.00\t'Panam�'\t'Republic'\t'Mireya Elisa Moscoso Rodr�guez'\t2882\t'PA'\n'PCN'\t'Pitcairn'\t'Oceania'\t'Polynesia'\t49.00\tNULL\t50\tNULL\t0.00\tNULL\t'Pitcairn'\t'Dependent Territory of the UK'\t'Elisabeth II'\t2912\t'PN'\n'PER'\t'Peru'\t'South America'\t'South America'\t1285216.00\t1821\t25662000\t70.0\t64140.00\t65186.00\t'Per�/Piruw'\t'Republic'\t'Valentin Paniagua Corazao'\t2890\t'PE'\n'PHL'\t'Philippines'\t'Asia'\t'Southeast Asia'\t300000.00\t1946\t75967000\t67.5\t65107.00\t82239.00\t'Pilipinas'\t'Republic'\t'Gloria Macapagal-Arroyo'\t766\t'PH'\n'PLW'\t'Palau'\t'Oceania'\t'Micronesia'\t459.00\t1994\t19000\t68.6\t105.00\tNULL\t'Belau/Palau'\t'Republic'\t'Kuniwo Nakamura'\t2881\t'PW'\n'PNG'\t'Papua New Guinea'\t'Oceania'\t'Melanesia'\t462840.00\t1975\t4807000\t63.1\t4988.00\t6328.00\t'Papua New Guinea/Papua Niugini'\t'Constitutional Monarchy'\t'Elisabeth II'\t2884\t'PG'\n'POL'\t'Poland'\t'Europe'\t'Eastern Europe'\t323250.00\t1918\t38653600\t73.2\t151697.00\t135636.00\t'Polska'\t'Republic'\t'Aleksander Kwasniewski'\t2928\t'PL'\n'PRI'\t'Puerto Rico'\t'North America'\t'Caribbean'\t8875.00\tNULL\t3869000\t75.6\t34100.00\t32100.00\t'Puerto Rico'\t'Commonwealth of the US'\t'George W. Bush'\t2919\t'PR'\n'PRK'\t'North Korea'\t'Asia'\t'Eastern Asia'\t120538.00\t1948\t24039000\t70.7\t5332.00\tNULL\t'Choson Minjujuui In�min Konghwaguk (Bukhan)'\t'Socialistic Republic'\t'Kim Jong-il'\t2318\t'KP'\n'PRT'\t'Portugal'\t'Europe'\t'Southern Europe'\t91982.00\t1143\t9997600\t75.8\t105954.00\t102133.00\t'Portugal'\t'Republic'\t'Jorge Samp�io'\t2914\t'PT'\n'PRY'\t'Paraguay'\t'South America'\t'South America'\t406752.00\t1811\t5496000\t73.7\t8444.00\t9555.00\t'Paraguay'\t'Republic'\t'Luis �ngel Gonz�lez Macchi'\t2885\t'PY'\n'PSE'\t'Palestine'\t'Asia'\t'Middle East'\t6257.00\tNULL\t3101000\t71.4\t4173.00\tNULL\t'Filastin'\t'Autonomous Area'\t'Yasser (Yasir) Arafat'\t4074\t'PS'\n'PYF'\t'French Polynesia'\t'Oceania'\t'Polynesia'\t4000.00\tNULL\t235000\t74.8\t818.00\t781.00\t'Polyn�sie fran�aise'\t'Nonmetropolitan Territory of France'\t'Jacques Chirac'\t3016\t'PF'\n'QAT'\t'Qatar'\t'Asia'\t'Middle East'\t11000.00\t1971\t599000\t72.4\t9472.00\t8920.00\t'Qatar'\t'Monarchy'\t'Hamad ibn Khalifa al-Thani'\t2973\t'QA'\n'REU'\t'R�union'\t'Africa'\t'Eastern Africa'\t2510.00\tNULL\t699000\t72.7\t8287.00\t7988.00\t'R�union'\t'Overseas Department of France'\t'Jacques Chirac'\t3017\t'RE'\n'ROM'\t'Romania'\t'Europe'\t'Eastern Europe'\t238391.00\t1878\t22455500\t69.9\t38158.00\t34843.00\t'Rom�nia'\t'Republic'\t'Ion Iliescu'\t3018\t'RO'\n'RUS'\t'Russian Federation'\t'Europe'\t'Eastern Europe'\t17075400.00\t1991\t146934000\t67.2\t276608.00\t442989.00\t'Rossija'\t'Federal Republic'\t'Vladimir Putin'\t3580\t'RU'\n'RWA'\t'Rwanda'\t'Africa'\t'Eastern Africa'\t26338.00\t1962\t7733000\t39.3\t2036.00\t1863.00\t'Rwanda/Urwanda'\t'Republic'\t'Paul Kagame'\t3047\t'RW'\n'SAU'\t'Saudi Arabia'\t'Asia'\t'Middle East'\t2149690.00\t1932\t21607000\t67.8\t137635.00\t146171.00\t'Al-�Arabiya as-Sa�udiya'\t'Monarchy'\t'Fahd ibn Abdul-Aziz al-Sa�ud'\t3173\t'SA'\n'SDN'\t'Sudan'\t'Africa'\t'Northern Africa'\t2505813.00\t1956\t29490000\t56.6\t10162.00\tNULL\t'As-Sudan'\t'Islamic Republic'\t'Omar Hassan Ahmad al-Bashir'\t3225\t'SD'\n'SEN'\t'Senegal'\t'Africa'\t'Western Africa'\t196722.00\t1960\t9481000\t62.2\t4787.00\t4542.00\t'S�n�gal/Sounougal'\t'Republic'\t'Abdoulaye Wade'\t3198\t'SN'\n'SGP'\t'Singapore'\t'Asia'\t'Southeast Asia'\t618.00\t1965\t3567000\t80.1\t86503.00\t96318.00\t'Singapore/Singapura/Xinjiapo/Singapur'\t'Republic'\t'Sellapan Rama Nathan'\t3208\t'SG'\n'SGS'\t'South Georgia and the South Sandwich Islands'\t'Antarctica'\t'Antarctica'\t3903.00\tNULL\t0\tNULL\t0.00\tNULL\t'South Georgia and the South Sandwich Islands'\t'Dependent Territory of the UK'\t'Elisabeth II'\tNULL\t'GS'\n'SHN'\t'Saint Helena'\t'Africa'\t'Western Africa'\t314.00\tNULL\t6000\t76.8\t0.00\tNULL\t'Saint Helena'\t'Dependent Territory of the UK'\t'Elisabeth II'\t3063\t'SH'\n'SJM'\t'Svalbard and Jan Mayen'\t'Europe'\t'Nordic Countries'\t62422.00\tNULL\t3200\tNULL\t0.00\tNULL\t'Svalbard og Jan Mayen'\t'Dependent Territory of Norway'\t'Harald V'\t938\t'SJ'\n'SLB'\t'Solomon Islands'\t'Oceania'\t'Melanesia'\t28896.00\t1978\t444000\t71.3\t182.00\t220.00\t'Solomon Islands'\t'Constitutional Monarchy'\t'Elisabeth II'\t3161\t'SB'\n'SLE'\t'Sierra Leone'\t'Africa'\t'Western Africa'\t71740.00\t1961\t4854000\t45.3\t746.00\t858.00\t'Sierra Leone'\t'Republic'\t'Ahmed Tejan Kabbah'\t3207\t'SL'\n'SLV'\t'El Salvador'\t'North America'\t'Central America'\t21041.00\t1841\t6276000\t69.7\t11863.00\t11203.00\t'El Salvador'\t'Republic'\t'Francisco Guillermo Flores P�rez'\t645\t'SV'\n'SMR'\t'San Marino'\t'Europe'\t'Southern Europe'\t61.00\t885\t27000\t81.1\t510.00\tNULL\t'San Marino'\t'Republic'\tNULL\t3171\t'SM'\n'SOM'\t'Somalia'\t'Africa'\t'Eastern Africa'\t637657.00\t1960\t10097000\t46.2\t935.00\tNULL\t'Soomaaliya'\t'Republic'\t'Abdiqassim Salad Hassan'\t3214\t'SO'\n'SPM'\t'Saint Pierre and Miquelon'\t'North America'\t'North America'\t242.00\tNULL\t7000\t77.6\t0.00\tNULL\t'Saint-Pierre-et-Miquelon'\t'Territorial Collectivity of France'\t'Jacques Chirac'\t3067\t'PM'\n'STP'\t'Sao Tome and Principe'\t'Africa'\t'Central Africa'\t964.00\t1975\t147000\t65.3\t6.00\tNULL\t'S�o Tom� e Pr�ncipe'\t'Republic'\t'Miguel Trovoada'\t3172\t'ST'\n'SUR'\t'Suriname'\t'South America'\t'South America'\t163265.00\t1975\t417000\t71.4\t870.00\t706.00\t'Suriname'\t'Republic'\t'Ronald Venetiaan'\t3243\t'SR'\n'SVK'\t'Slovakia'\t'Europe'\t'Eastern Europe'\t49012.00\t1993\t5398700\t73.7\t20594.00\t19452.00\t'Slovensko'\t'Republic'\t'Rudolf Schuster'\t3209\t'SK'\n'SVN'\t'Slovenia'\t'Europe'\t'Southern Europe'\t20256.00\t1991\t1987800\t74.9\t19756.00\t18202.00\t'Slovenija'\t'Republic'\t'Milan Kucan'\t3212\t'SI'\n'SWE'\t'Sweden'\t'Europe'\t'Nordic Countries'\t449964.00\t836\t8861400\t79.6\t226492.00\t227757.00\t'Sverige'\t'Constitutional Monarchy'\t'Carl XVI Gustaf'\t3048\t'SE'\n'SWZ'\t'Swaziland'\t'Africa'\t'Southern Africa'\t17364.00\t1968\t1008000\t40.4\t1206.00\t1312.00\t'kaNgwane'\t'Monarchy'\t'Mswati III'\t3244\t'SZ'\n'SYC'\t'Seychelles'\t'Africa'\t'Eastern Africa'\t455.00\t1976\t77000\t70.4\t536.00\t539.00\t'Sesel/Seychelles'\t'Republic'\t'France-Albert Ren�'\t3206\t'SC'\n'SYR'\t'Syria'\t'Asia'\t'Middle East'\t185180.00\t1941\t16125000\t68.5\t65984.00\t64926.00\t'Suriya'\t'Republic'\t'Bashar al-Assad'\t3250\t'SY'\n'TCA'\t'Turks and Caicos Islands'\t'North America'\t'Caribbean'\t430.00\tNULL\t17000\t73.3\t96.00\tNULL\t'The Turks and Caicos Islands'\t'Dependent Territory of the UK'\t'Elisabeth II'\t3423\t'TC'\n'TCD'\t'Chad'\t'Africa'\t'Central Africa'\t1284000.00\t1960\t7651000\t50.5\t1208.00\t1102.00\t'Tchad/Tshad'\t'Republic'\t'Idriss D�by'\t3337\t'TD'\n'TGO'\t'Togo'\t'Africa'\t'Western Africa'\t56785.00\t1960\t4629000\t54.7\t1449.00\t1400.00\t'Togo'\t'Republic'\t'Gnassingb� Eyad�ma'\t3332\t'TG'\n'THA'\t'Thailand'\t'Asia'\t'Southeast Asia'\t513115.00\t1350\t61399000\t68.6\t116416.00\t153907.00\t'Prathet Thai'\t'Constitutional Monarchy'\t'Bhumibol Adulyadej'\t3320\t'TH'\n'TJK'\t'Tajikistan'\t'Asia'\t'Southern and Central Asia'\t143100.00\t1991\t6188000\t64.1\t1990.00\t1056.00\t'To�ikiston'\t'Republic'\t'Emomali Rahmonov'\t3261\t'TJ'\n'TKL'\t'Tokelau'\t'Oceania'\t'Polynesia'\t12.00\tNULL\t2000\tNULL\t0.00\tNULL\t'Tokelau'\t'Nonmetropolitan Territory of New Zealand'\t'Elisabeth II'\t3333\t'TK'\n'TKM'\t'Turkmenistan'\t'Asia'\t'Southern and Central Asia'\t488100.00\t1991\t4459000\t60.9\t4397.00\t2000.00\t'T�rkmenostan'\t'Republic'\t'Saparmurad Nijazov'\t3419\t'TM'\n'TMP'\t'East Timor'\t'Asia'\t'Southeast Asia'\t14874.00\tNULL\t885000\t46.0\t0.00\tNULL\t'Timor Timur'\t'Administrated by the UN'\t'Jos� Alexandre Gusm�o'\t1522\t'TP'\n'TON'\t'Tonga'\t'Oceania'\t'Polynesia'\t650.00\t1970\t99000\t67.9\t146.00\t170.00\t'Tonga'\t'Monarchy'\t'Taufa\'ahau Tupou IV'\t3334\t'TO'\n'TTO'\t'Trinidad and Tobago'\t'North America'\t'Caribbean'\t5130.00\t1962\t1295000\t68.0\t6232.00\t5867.00\t'Trinidad and Tobago'\t'Republic'\t'Arthur N. R. Robinson'\t3336\t'TT'\n'TUN'\t'Tunisia'\t'Africa'\t'Northern Africa'\t163610.00\t1956\t9586000\t73.7\t20026.00\t18898.00\t'Tunis/Tunisie'\t'Republic'\t'Zine al-Abidine Ben Ali'\t3349\t'TN'\n'TUR'\t'Turkey'\t'Asia'\t'Middle East'\t774815.00\t1923\t66591000\t71.0\t210721.00\t189122.00\t'T�rkiye'\t'Republic'\t'Ahmet Necdet Sezer'\t3358\t'TR'\n'TUV'\t'Tuvalu'\t'Oceania'\t'Polynesia'\t26.00\t1978\t12000\t66.3\t6.00\tNULL\t'Tuvalu'\t'Constitutional Monarchy'\t'Elisabeth II'\t3424\t'TV'\n'TWN'\t'Taiwan'\t'Asia'\t'Eastern Asia'\t36188.00\t1945\t22256000\t76.4\t256254.00\t263451.00\t'T�ai-wan'\t'Republic'\t'Chen Shui-bian'\t3263\t'TW'\n'TZA'\t'Tanzania'\t'Africa'\t'Eastern Africa'\t883749.00\t1961\t33517000\t52.3\t8005.00\t7388.00\t'Tanzania'\t'Republic'\t'Benjamin William Mkapa'\t3306\t'TZ'\n'UGA'\t'Uganda'\t'Africa'\t'Eastern Africa'\t241038.00\t1962\t21778000\t42.9\t6313.00\t6887.00\t'Uganda'\t'Republic'\t'Yoweri Museveni'\t3425\t'UG'\n'UKR'\t'Ukraine'\t'Europe'\t'Eastern Europe'\t603700.00\t1991\t50456000\t66.0\t42168.00\t49677.00\t'Ukrajina'\t'Republic'\t'Leonid Kut�ma'\t3426\t'UA'\n'UMI'\t'United States Minor Outlying Islands'\t'Oceania'\t'Micronesia/Caribbean'\t16.00\tNULL\t0\tNULL\t0.00\tNULL\t'United States Minor Outlying Islands'\t'Dependent Territory of the US'\t'George W. Bush'\tNULL\t'UM'\n'URY'\t'Uruguay'\t'South America'\t'South America'\t175016.00\t1828\t3337000\t75.2\t20831.00\t19967.00\t'Uruguay'\t'Republic'\t'Jorge Batlle Ib��ez'\t3492\t'UY'\n'USA'\t'United States'\t'North America'\t'North America'\t9363520.00\t1776\t278357000\t77.1\t8510700.00\t8110900.00\t'United States'\t'Federal Republic'\t'George W. Bush'\t3813\t'US'\n'UZB'\t'Uzbekistan'\t'Asia'\t'Southern and Central Asia'\t447400.00\t1991\t24318000\t63.7\t14194.00\t21300.00\t'Uzbekiston'\t'Republic'\t'Islam Karimov'\t3503\t'UZ'\n'VAT'\t'Holy See (Vatican City State)'\t'Europe'\t'Southern Europe'\t0.40\t1929\t1000\tNULL\t9.00\tNULL\t'Santa Sede/Citt� del Vaticano'\t'Independent Church State'\t'Johannes Paavali II'\t3538\t'VA'\n'VCT'\t'Saint Vincent and the Grenadines'\t'North America'\t'Caribbean'\t388.00\t1979\t114000\t72.3\t285.00\tNULL\t'Saint Vincent and the Grenadines'\t'Constitutional Monarchy'\t'Elisabeth II'\t3066\t'VC'\n'VEN'\t'Venezuela'\t'South America'\t'South America'\t912050.00\t1811\t24170000\t73.1\t95023.00\t88434.00\t'Venezuela'\t'Federal Republic'\t'Hugo Ch�vez Fr�as'\t3539\t'VE'\n'VGB'\t'British Virgin Islands'\t'North America'\t'Caribbean'\t151.00\tNULL\t21000\t75.4\t612.00\t573.00\t'British Virgin Islands'\t'Dependent Territory of the UK'\t'Elisabeth II'\t537\t'VG'\n'VIR'\t'U.S. Virgin Islands'\t'North America'\t'Caribbean'\t347.00\tNULL\t93000\t78.1\t0.00\tNULL\t'Virgin Islands of the United States'\t'US Territory'\t'George W. Bush'\t4067\t'VI'\n'VNM'\t'Vietnam'\t'Asia'\t'Southeast Asia'\t331689.00\t1945\t79832000\t69.3\t21929.00\t22834.00\t'Vi�t Nam'\t'Socialistic Republic'\t'Tr�n Duc Luong'\t3770\t'VN'\n'VUT'\t'Vanuatu'\t'Oceania'\t'Melanesia'\t12189.00\t1980\t190000\t60.6\t261.00\t246.00\t'Vanuatu'\t'Republic'\t'John Bani'\t3537\t'VU'\n'WLF'\t'Wallis and Futuna'\t'Oceania'\t'Polynesia'\t200.00\tNULL\t15000\tNULL\t0.00\tNULL\t'Wallis-et-Futuna'\t'Nonmetropolitan Territory of France'\t'Jacques Chirac'\t3536\t'WF'\n'WSM'\t'Samoa'\t'Oceania'\t'Polynesia'\t2831.00\t1962\t180000\t69.2\t141.00\t157.00\t'Samoa'\t'Parlementary Monarchy'\t'Malietoa Tanumafili II'\t3169\t'WS'\n'YEM'\t'Yemen'\t'Asia'\t'Middle East'\t527968.00\t1918\t18112000\t59.8\t6041.00\t5729.00\t'Al-Yaman'\t'Republic'\t'Ali Abdallah Salih'\t1780\t'YE'\n'YUG'\t'Yugoslavia'\t'Europe'\t'Southern Europe'\t102173.00\t1918\t10640000\t72.4\t17000.00\tNULL\t'Jugoslavija'\t'Federal Republic'\t'Vojislav Ko�tunica'\t1792\t'YU'\n'ZAF'\t'South Africa'\t'Africa'\t'Southern Africa'\t1221037.00\t1910\t40377000\t51.1\t116729.00\t129092.00\t'South Africa'\t'Republic'\t'Thabo Mbeki'\t716\t'ZA'\n'ZMB'\t'Zambia'\t'Africa'\t'Eastern Africa'\t752618.00\t1964\t9169000\t37.2\t3377.00\t3922.00\t'Zambia'\t'Republic'\t'Frederick Chiluba'\t3162\t'ZM'\n'ZWE'\t'Zimbabwe'\t'Africa'\t'Eastern Africa'\t390757.00\t1980\t11669000\t37.8\t5951.00\t8670.00\t'Zimbabwe'\t'Republic'\t'Robert G. Mugabe'\t4068\t'ZW'";

      // $.ajax({
      //   url: "https://drive.google.com/file/d/0B1ysgI2vyHDaZ2JpLVJQemJLX216VEo3ZVczbFctS3QyMFU0/view?usp=sharing",
      //   type: "GET",
      //   success: function (data) {
      //       alert(data);
      //   },
      // });

      // countries.split("\n");
      // for(var i=0; i<countries.length; i++){
      //   var column = countries[0].split('\t');
      // }

      const POPULATION = 6;
      const LifeExpectancy = 7;
      const CONTINENT = 2;


      countries = countries.replace(/'/g, '');
      countries = countries.split('\n').map( line => {
          return line.split('\t')
      }).map( countrie => {
          countrie[POPULATION] = parseInt(countrie[POPULATION]);
          countrie[LifeExpectancy] = parseInt(countrie[LifeExpectancy]);
          return countrie;
      });
      

      var africa = [];
      var asia = [];
      var northAmerica = [];
      var southAmerica = [];
      var oceania = [];
      var antarctica = [];
      var europe = [];

      for(var i=1; i<countries.length; i++){
        switch(countries[i][CONTINENT]){
          case 'Africa': 
            africa.push(countries[i]);
            break;
          case 'Europe':
            europe.push(countries[i]);
            break;
          case 'Oceania':
            oceania.push(countries[i]);
            break;
          case 'Asia':
            asia.push(countries[i]);
            break;
          case 'North America':
            northAmerica.push(countries[i]);
            break;
          case 'South America':
            southAmerica.push(countries[i]);
            break;
          case 'Antarctica':
            antarctica.push(countries[i]);
            break;
        }
      }
      sortByCriteria = (criteria) => {
        africa.sort( (a, b) => ( a[criteria] < b[criteria] ? -1 : 1));
        europe.sort( (a, b) => ( a[criteria] < b[criteria] ? -1 : 1));
        asia.sort( (a, b) => ( a[criteria] < b[criteria] ? -1 : 1));
        oceania.sort( (a, b) => ( a[criteria] < b[criteria] ? -1 : 1));
        northAmerica.sort( (a, b) => ( a[criteria] < b[criteria] ? -1 : 1));
        southAmerica.sort( (a, b) => ( a[criteria] < b[criteria] ? -1 : 1));
        antarctica.sort( (a, b) => ( a[criteria] < b[criteria] ? -1 : 1));
      }
      
      calculateFirstQuartile = (list) => {
        const length = list.length;
        if(length % 2 == 0) {
          if( length % 4 == 0) {
            return (list[(length / 4) - 1] + list[length / 4] ) / 2; 
          }
          return list[((length + 2) / 4) - 1];
        }
        else {
          if( (length - 1 ) % 4 == 0 ) {
            return (list[((length - 1) / 4) - 1] + list[((length - 1) / 4)]) / 2;
          }
          return list[(((length - 1) / 2) - 1) / 2];
        }
      }

      calculateThirdQuartile = (list) => {
        const length = list.length;
        if(length % 2 == 0) {
          if( length % 4 == 0) {
            return (list[length - (length / 4)] + list[length - (length / 4) - 1] ) / 2; 
          }
          return list[( length - ((length + 2) / 4) )];
        }
        else {
          if( (length - 1 ) % 4 == 0 ) {
            return (list[length - ((length - 1) / 4)] + list[length - ((length - 1) / 4) - 1]) / 2;
          }
          return list[length - ((((length - 1) / 2) - 1) / 2) - 1];
        }
      }

      calculateMedian = (list) => {
        const length = list.length;
        return (length % 2 == 0) ? (list[(length / 2) - 1] + list[length / 2] )/2 : list[(length - 1) / 2]
      }
      
      findOutliners = (list,firstQuartile,thirdQuartile) => {
        
        var result = {
          outliners: [],
          low: null,
          high: null,
        };
        var i = 0;
        try{
          while(i < list.length && (list[i] < 2.5 * firstQuartile - 1.5 * thirdQuartile)) {
            result.outliners.push(list[i]);
            i++;
          };
          result.low = list[i];
          while(i < list.length && (list[i] <= 2.5 * thirdQuartile - 1.5 * firstQuartile)) i++;
          result.outliners.push(...list.slice(i));
          result.high = list[i - 1];
          //result.outliners =  result.outliners.concat(list.slice(i));
          
          return result;
        }
        catch (err) {
          console.error(err);
          return result;
        };
      }

      getFilteredListByCriteria = (continent,criteria) => {
        const filteredList = [];
        sortByCriteria(criteria);
        continent.forEach(country => {
          if(!isNaN(parseFloat(country[criteria])) && isFinite(country[criteria])) filteredList.push(country[criteria]);
        });
        return filteredList;
      }

      var continentList = [africa, europe, asia, northAmerica, southAmerica, oceania, antarctica];

      var boxPlotSeriesPopulation = [
        {name: "Series 1", items :
        continentList.map(continent => {
          const filtredPopulation = getFilteredListByCriteria(continent,POPULATION);
          const q1 = calculateFirstQuartile(filtredPopulation);
          const q2 = calculateMedian(filtredPopulation);
          const q3 = calculateThirdQuartile(filtredPopulation);
          const outliners = findOutliners(filtredPopulation, q1, q3);
          return {
            low: outliners.low,
            q1,
            q2,
            q3,
            high: outliners.high,
            items:  outliners.outliners,
          }
        })
        }
      ];
      boxPlotSeriesPopulation[0].items.push({
        high: 1250000000,
    });
      
      var boxPlotSeriesLifeExpectancy = [
        {name: "Series 1", items :
        continentList.map(continent => {
          const filtredSurface = getFilteredListByCriteria(continent,LifeExpectancy);
          const q1 = calculateFirstQuartile(filtredSurface);
          const q2 = calculateMedian(filtredSurface);
          const q3 = calculateThirdQuartile(filtredSurface);
          const outliners = findOutliners(filtredSurface, q1, q3);
          return {
            low: outliners.low,
            q1,
            q2,
            q3,
            high: outliners.high,
            items:  outliners.outliners,
          }
        })
        }
      ];
      var boxPlotGroups = ["Africa", "Europe", "Asia", "North America", "South America", "Oceania", "Antarctica",""];
 
      self.boxPlotSeriesValuePopulation = ko.observableArray(boxPlotSeriesPopulation);
      self.boxPlotSeriesValueLifeExpectancy = ko.observableArray(boxPlotSeriesLifeExpectancy);
      self.boxPlotGroupsValue = ko.observableArray(boxPlotGroups);
      
      /* toggle buttons */
      self.orientationValue = ko.observable('vertical');

      // Footer
      function footerLink(name, id, linkTarget) {
        this.name = name;
        this.linkId = id;
        this.linkTarget = linkTarget;
      }
      self.footerLinks = ko.observableArray([
        new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
        new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
        new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
        new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
        new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
      ]);
     }

     
     
     return new ControllerViewModel();
     
  }
);
