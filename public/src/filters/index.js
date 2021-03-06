export default{
  date:function (D) {
    return moment(D).format("dddd, MMMM Do YYYY");
  },
  monthYear:function(D) {
      return moment(D,'YYYY-M-dddd').format("MMMM YYYY");
  },
  formatMoney:function(n,c, d, t,sym){
        c = isNaN(c = Math.abs(c)) ? 2 : c;
        d = d == undefined ? "." : d;
        t = t == undefined ? "," : t;
        sym= sym == undefined ? '$' : sym;
        var s = n < 0 ? "-" : "";
        var i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
        var j = (j = i.length) > 3 ? j % 3 : 0;
       return s + sym + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
   },
   round:function (n) {
     return Math.round(n);
   }
}
