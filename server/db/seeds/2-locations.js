exports.seed = async function (knex) {
  await knex('locations').insert([
    { id: 1, name: 'Auckland Central' },
    { id: 2, name: 'Parnell' },
    { id: 3, name: 'Ponsonby' },
    { id: 4, name: 'Newmarket' },
    { id: 5, name: 'Takapuna' },
    { id: 6, name: 'Devonport' },
    { id: 7, name: 'Milford' },
    { id: 8, name: 'Albany' },
    { id: 9, name: 'Henderson' },
    { id: 10, name: 'New Lynn' },
    { id: 11, name: 'Titirangi' },
    { id: 12, name: 'Massey' },
    { id: 13, name: 'Manukau' },
    { id: 14, name: 'Papatoetoe' },
    { id: 15, name: 'Mangere' },
    { id: 16, name: 'Otahuhu' },
    { id: 17, name: 'Howick' },
    { id: 18, name: 'Pakuranga' },
    { id: 19, name: 'Botany Downs' },
    { id: 20, name: 'Half Moon Bay' },
  ])
}
