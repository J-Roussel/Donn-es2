let diff = ['rouge','jaune','blanc','rouge','jaune','noir','jaune','rouge','rouge'];
let color = [diff[0]];
let stock = [0];
//Rah mbola ts ao le color de push-ena anatnle tableau vide
for (let i = 1; i < diff.length; i++) {
    if (diff[0] != diff[i] && color.indexOf(diff[i]) == -1) {
        color.push(diff[i]);
        stock.push(0);
    }
}