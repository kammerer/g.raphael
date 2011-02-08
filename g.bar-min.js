Raphael.fn.g.barchart=function(w,A,d,x,f,b){b=b||{};var I={round:"round",sharp:"sharp",soft:"soft"}[b.type]||"square",g=parseFloat(b.gutter||"20%"),n=this.set(),s=this.set(),k=this.set(),o=this.set(),r=Math.max.apply(Math,f),i=[],G=this,h=0,J=b.colors||this.g.colors,m=f.length;if(this.raphael.is(f[0],"array")){r=[];h=m;m=0;for(var a=f.length;a--;){s.push(this.set());r.push(Math.max.apply(Math,f[a]));m=Math.max(m,f[a].length)}if(b.stacked)for(a=m;a--;){for(var t=0,c=f.length;c--;)t+=+f[c][a]||0;i.push(t)}for(a=
f.length;a--;)if(f[a].length<m)for(c=m;c--;)f[a].push(0);r=Math.max.apply(Math,b.stacked?i:r)}r=b.to||r;if(r==0)r=100;i=d/(m*(100+g)+g)*100;t=i*g/100;var p=b.vgutter==null?20:b.vgutter,l=[],j=w+t,D=(x-2*p)/r*0.9;l=[];c=[];if(b.grid&&b.grid.labels){l=[];for(a=0;a<4;a++){var y=r/0.9*(a+1)/5,E=this.text(w,A+x-y*D,Number(y).toFixed(1));l.push(E);c.push(E.getBBox().width);b.textColor&&E.attr({fill:b.textColor})}var C=Math.max.apply(Math,c);d-=C;w+=C;i=d/(m*(100+g)+g)*100;t=i*g/100;j=w+t}b.border&&this.rect(w,
A,d,x).attr({stroke:b.border.stroke,"stroke-width":b.border.strokeWidth});b.background&&this.rect(w,A,d,x).attr({fill:b.background.fill,"stroke-width":0});if(b.grid)for(a=0;a<4;a++){y=r*(a+1)/5;if(b.grid.labels){E=l[a];E.translate(C-E.getBBox().width*0.5-10,0)}this.path("M "+w+","+(A+x-y*D/0.9)+"L "+(w+d)+","+(A+x-y*D/0.9)).attr({stroke:b.grid.stroke})}if(!b.stretch){t=Math.round(t);i=Math.floor(i)}!b.stacked&&(i/=h||1);for(a=0;a<m;a++){l=[];for(c=0;c<(h||1);c++){g=Math.round((h?f[c][a]:f[a])*D);
C=A+x-p-g;d=this.g.finger(Math.round(j+i/2),C+g,i,g,true,I).attr({stroke:"none",fill:J[h?c:a]});h?s[c].push(d):s.push(d);d.y=C;d.x=Math.round(j+i/2);d.w=i;d.h=g;d.value=h?f[c][a]:f[a];if(b.stacked)l.push(d);else j+=i}if(b.stacked){o.push(c=this.rect(l[0].x-l[0].w/2,A,i,x).attr(this.g.shim));c.bars=this.set();C=0;for(y=l.length;y--;)l[y].toFront();y=0;for(E=l.length;y<E;y++){d=l[y];g=(C+d.value)*D;var u=this.g.finger(d.x,A+x-p-!!C*0.5,i,g,true,I,1);c.bars.push(d);C&&d.attr({path:u});d.h=g;d.y=A+x-
p-!!C*0.5-g;k.push(g=this.rect(d.x-d.w/2,d.y,i,d.value*D).attr(this.g.shim));g.bar=d;g.value=d.value;C+=d.value;if(b.axisLabels&&y==0){d=this.text(d.x,d.y+d.value*D+12,b.axisLabels[a]);b.textColor&&d.attr({fill:b.textColor})}}j+=i}j+=t}o.toFront();j=w+t;if(!b.stacked)for(a=0;a<m;a++){for(c=0;c<(h||1);c++){k.push(g=this.rect(Math.round(j),A+p,i,x-p).attr(this.g.shim));g.bar=h?s[c][a]:s[a];g.value=g.bar.value;j+=i}j+=t}n.label=function(e,q){e=e||[];this.labels=G.set();var v,F=-Infinity;if(b.stacked)for(var z=
0;z<m;z++)for(var K=0,B=0;B<(h||1);B++){K+=h?f[B][z]:f[z];if(B==h-1){v=G.g.labelise(e[z],K,r);v=G.g.text(s[z*(h||1)+B].x,A+x-p/2,v).insertBefore(k[z*(h||1)+B]);var H=v.getBBox();if(H.x-7<F)v.remove();else{this.labels.push(v);F=H.x+H.width}}}else for(z=0;z<m;z++)for(B=0;B<(h||1);B++){v=G.g.labelise(h?e[B]&&e[B][z]:e[z],h?f[B][z]:f[z],r);v=G.g.text(s[z*(h||1)+B].x,q?A+x-p/2:s[z*(h||1)+B].y-10,v).insertBefore(k[z*(h||1)+B]);H=v.getBBox();if(H.x-7<F)v.remove();else{this.labels.push(v);F=H.x+H.width}}return this};
n.hover=function(e,q){o.hide();k.show();k.mouseover(e).mouseout(q);return this};n.hoverColumn=function(e,q){k.hide();o.show();q=q||function(){};o.mouseover(e).mouseout(q);return this};n.click=function(e){o.hide();k.show();k.click(e);return this};n.each=function(e){if(!Raphael.is(e,"function"))return this;for(var q=k.length;q--;)e.call(k[q]);return this};n.eachColumn=function(e){if(!Raphael.is(e,"function"))return this;for(var q=o.length;q--;)e.call(o[q]);return this};n.clickColumn=function(e){k.hide();
o.show();o.click(e);return this};n.push(s,k,o);n.bars=s;n.covers=k;return n};
Raphael.fn.g.hbarchart=function(w,A,d,x,f,b){b=b||{};var I={round:"round",sharp:"sharp",soft:"soft"}[b.type]||"square",g=parseFloat(b.gutter||"20%"),n=this.set(),s=this.set(),k=this.set(),o=this.set(),r=Math.max.apply(Math,f),i=[],G=this,h=0,J=b.colors||this.g.colors,m=f.length;if(this.raphael.is(f[0],"array")){r=[];h=m;m=0;for(var a=f.length;a--;){s.push(this.set());r.push(Math.max.apply(Math,f[a]));m=Math.max(m,f[a].length)}if(b.stacked)for(a=m;a--;){for(var t=0,c=f.length;c--;)t+=+f[c][a]||0;i.push(t)}for(a=
f.length;a--;)if(f[a].length<m)for(c=m;c--;)f[a].push(0);r=Math.max.apply(Math,b.stacked?i:r)}r=b.to||r;var p=Math.floor(x/(m*(100+g)+g)*100);x=Math.floor(p*g/100);g=[];i=A+x;t=(d-1)/r;!b.stacked&&(p/=h||1);for(a=0;a<m;a++){g=[];for(c=0;c<(h||1);c++){var l=h?f[c][a]:f[a],j=this.g.finger(w,i+p/2,Math.round(l*t),p-1,false,I).attr({stroke:"none",fill:J[h?c:a]});h?s[c].push(j):s.push(j);j.x=w+Math.round(l*t);j.y=i+p/2;j.w=Math.round(l*t);j.h=p;j.value=+l;if(b.stacked)g.push(j);else i+=p}if(b.stacked){c=
this.rect(w,g[0].y-g[0].h/2,d,p).attr(this.g.shim);o.push(c);c.bars=this.set();for(var D=0,y=g.length;y--;)g[y].toFront();y=0;for(var E=g.length;y<E;y++){j=g[y];l=Math.round((D+j.value)*t);var C=this.g.finger(w,j.y,l,p-1,false,I,1);c.bars.push(j);D&&j.attr({path:C});j.w=l;j.x=w+l;k.push(l=this.rect(w+D*t,j.y-j.h/2,j.value*t,p).attr(this.g.shim));l.bar=j;D+=j.value}i+=p}i+=x}o.toFront();i=A+x;if(!b.stacked)for(a=0;a<m;a++){for(c=0;c<(h||1);c++){l=this.rect(w,i,d,p).attr(this.g.shim);k.push(l);l.bar=
h?s[c][a]:s[a];l.value=l.bar.value;i+=p}i+=x}n.label=function(u,e){u=u||[];this.labels=G.set();for(var q=0;q<m;q++)for(var v=0;v<h;v++){var F=G.g.labelise(h?u[v]&&u[v][q]:u[q],h?f[v][q]:f[q],r),z=e?"end":"start";this.labels.push(F=G.g.text(e?s[q*(h||1)+v].x-p/2+3:w+5,s[q*(h||1)+v].y,F).attr({"text-anchor":z}).insertBefore(k[0]));if(F.getBBox().x<w+5)F.attr({x:w+5,"text-anchor":"start"});else s[q*(h||1)+v].label=F}return this};n.hover=function(u,e){o.hide();k.show();e=e||function(){};k.mouseover(u).mouseout(e);
return this};n.hoverColumn=function(u,e){k.hide();o.show();e=e||function(){};o.mouseover(u).mouseout(e);return this};n.each=function(u){if(!Raphael.is(u,"function"))return this;for(var e=k.length;e--;)u.call(k[e]);return this};n.eachColumn=function(u){if(!Raphael.is(u,"function"))return this;for(var e=o.length;e--;)u.call(o[e]);return this};n.click=function(u){o.hide();k.show();k.click(u);return this};n.clickColumn=function(u){k.hide();o.show();o.click(u);return this};n.push(s,k,o);n.bars=s;n.covers=
k;return n};
