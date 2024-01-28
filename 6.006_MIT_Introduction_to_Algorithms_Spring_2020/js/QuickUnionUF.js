/**
 * @author simo
 * domenica, 2 febbraio 2014
 */


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var QuickUnionUF = function(N) {

  this.id = [];
  this.sz = [];

  for (var i = 0; i < N; i +=1) {

      this.id[i] = i;
      this.sz[i] = 0;

  }

  // EXTRA DRAWING PART
  this.points = [];
  this.size = 500;
  for (var i = 0; i < N; i +=1) {
      this.points[i] = [getRandomInt(0, this.size), getRandomInt(0, this.size)];
  }


}



QuickUnionUF.prototype.root = function(i) {
    while(i != this.id[i]) {
        // path compression: flatening the three
        this.id[i] = this.id[this.id[i]];
        i = this.id[i];
    }
    return i;
};

QuickUnionUF.prototype.connected = function(p, q) {
    return root(p) == root(q);
};

QuickUnionUF.prototype.union = function(p, q) {
    var i = root(p);
    var j = root(q);
    this.id[i] = j;
};

QuickUnionUF.prototype.unionImproved = function(p, q, snap) {
    var i = this.root(p);
    var j = this.root(q);
    if (i ==j) {
        return;
    }
    if (this.sz[i] < this.sz[j]) {
        this.id[i] = j;
        this.sz[j] +=this.sz[i];
    }
    else {
        this.id[j] = i;
        this.sz[i] += this.sz[j];
    }

    var line = snap.line(this.points[i][0], this.points[i][1], this.points[i][0], this.points[i][1]);
    line.animate({x1 : this.points[j][0], y1 : this.points[j][1]}, 1000);
    console.log(line);

};



