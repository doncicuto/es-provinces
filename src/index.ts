interface Province {
  code: string;
  name: string;
  commCode: string;
  commName: string;
}

const provinces: Province[] = [
  { code: "04", name: "Almería", commCode: "01", commName: "Andalucía" },
  { code: "11", name: "Cádiz", commCode: "01", commName: "Andalucía" },
  { code: "14", name: "Córdoba", commCode: "01", commName: "Andalucía" },
  { code: "18", name: "Granada", commCode: "01", commName: "Andalucía" },
  { code: "21", name: "Huelva", commCode: "01", commName: "Andalucía" },
  { code: "23", name: "Jaén", commCode: "01", commName: "Andalucía" },
  { code: "29", name: "Málaga", commCode: "01", commName: "Andalucía" },
  { code: "41", name: "Sevilla", commCode: "01", commName: "Andalucía" },
  { code: "22", name: "Huesca", commCode: "02", commName: "Aragón" },
  { code: "44", name: "Teruel", commCode: "02", commName: "Aragón" },
  { code: "50", name: "Zaragoza", commCode: "02", commName: "Aragón" },
  {
    code: "33",
    name: "Asturias",
    commCode: "03",
    commName: "Principado de Asturias",
  },
  {
    code: "07",
    name: "Illes Balears",
    commCode: "04",
    commName: "Illes Balears",
  },
  { code: "35", name: "Las Palmas", commCode: "05", commName: "Canarias" },
  {
    code: "38",
    name: "Santa Cruz de Tenerife",
    commCode: "05",
    commName: "Canarias",
  },
  { code: "39", name: "Cantabria", commCode: "06", commName: "Cantabria" },

  { code: "05", name: "Ávila", commCode: "07", commName: "Castilla y León" },
  { code: "09", name: "Burgos", commCode: "07", commName: "Castilla y León" },
  { code: "24", name: "León", commCode: "07", commName: "Castilla y León" },
  { code: "34", name: "Palencia", commCode: "07", commName: "Castilla y León" },
  {
    code: "37",
    name: "Salamanca",
    commCode: "07",
    commName: "Castilla y León",
  },
  { code: "40", name: "Segovia", commCode: "07", commName: "Castilla y León" },
  { code: "42", name: "Soria", commCode: "07", commName: "Castilla y León" },
  {
    code: "47",
    name: "Valladolid",
    commCode: "07",
    commName: "Castilla y León",
  },
  { code: "49", name: "Zamora", commCode: "07", commName: "Castilla y León" },
  {
    code: "02",
    name: "Albacete",
    commCode: "08",
    commName: "Castilla - La Mancha",
  },
  {
    code: "13",
    name: "Ciudad Real",
    commCode: "08",
    commName: "Castilla - La Mancha",
  },
  {
    code: "16",
    name: "Cuenca",
    commCode: "08",
    commName: "Castilla - La Mancha",
  },
  {
    code: "19",
    name: "Guadalajara",
    commCode: "08",
    commName: "Castilla - La Mancha",
  },
  {
    code: "45",
    name: "Toledo",
    commCode: "08",
    commName: "Castilla - La Mancha",
  },
  { code: "08", name: "Barcelona", commCode: "09", commName: "Cataluña" },
  { code: "17", name: "Girona", commCode: "09", commName: "Cataluña" },
  { code: "25", name: "Lleida", commCode: "09", commName: "Cataluña" },
  { code: "43", name: "Tarragona", commCode: "09", commName: "Cataluña" },
  {
    code: "03",
    name: "Alicante/Alacant",
    commCode: "10",
    commName: "Comunitat Valenciana",
  },
  {
    code: "12",
    name: "Castellón/Castelló",
    commCode: "10",
    commName: "Comunitat Valenciana",
  },
  {
    code: "46",
    name: "Valencia/València",
    commCode: "10",
    commName: "Comunitat Valenciana",
  },
  { code: "06", name: "Badajoz", commCode: "11", commName: "Extremadura" },
  { code: "10", name: "Cáceres", commCode: "11", commName: "Extremadura" },
  { code: "15", name: "A Coruña", commCode: "12", commName: "Galicia" },
  { code: "27", name: "Lugo", commCode: "12", commName: "Galicia" },
  { code: "32", name: "Ourense", commCode: "12", commName: "Galicia" },
  { code: "36", name: "Pontevedra", commCode: "12", commName: "Galicia" },
  {
    code: "28",
    name: "Madrid",
    commCode: "13",
    commName: "Comunidad de Madrid",
  },
  { code: "30", name: "Murcia", commCode: "14", commName: "Región de Murcia" },
  {
    code: "31",
    name: "Navarra",
    commCode: "15",
    commName: "Comunidad Foral de Navarra",
  },
  { code: "01", name: "Araba/Álava", commCode: "16", commName: "País Vasco" },
  { code: "48", name: "Bizkaia", commCode: "16", commName: "País Vasco" },
  { code: "20", name: "Gipuzkoa", commCode: "16", commName: "País Vasco" },
  { code: "26", name: "La Rioja", commCode: "17", commName: "La Rioja" },
  {
    code: "51",
    name: "Ceuta",
    commCode: "18",
    commName: "Ciudad Autónoma de Ceuta",
  },
  {
    code: "52",
    name: "Melilla",
    commCode: "19",
    commName: "Ciudad Autónoma de Melilla",
  },
];

export default provinces;
