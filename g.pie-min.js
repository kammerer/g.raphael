Raphael.fn.g.piechart=function(s,t,m,c,f){f=f||{};var u=this,x=[],p=this.set(),i=this.set(),n=this.set(),o=c.length,y=90,q=0,r=0,g=f.cut||c.length,z=f.defcut;i.covers=p;if(o==1){n.push(this.circle(s,t,m).attr({fill:this.g.colors[0],stroke:f.stroke||"#fff","stroke-width":f.strokewidth==null?1:f.strokewidth}));p.push(this.circle(s,t,m).attr(this.g.shim));q=c[0];c[0]={value:c[0],order:0,valueOf:function(){return this.value}};n[0].middle={x:s,y:t};n[0].mangle=0}else{for(var A=function(a,j,d,b,k){var h=
Math.PI/180,l=a+d*Math.cos(-b*h),v=a+d*Math.cos(-k*h),w=a+d/2*Math.cos(-(b+(k-b)/2)*h),B=j+d*Math.sin(-b*h),C=j+d*Math.sin(-k*h);h=j+d/2*Math.sin(-(b+(k-b)/2)*h);a=["M",a,j,"L",l,B,"A",d,d,0,+(Math.abs(k-b)>180),1,v,C,"z"];a.middle={x:w,y:h};return a},e=0;e<o;e++){q+=c[e];c[e]={value:c[e],order:e,valueOf:function(){return this.value}}}f.sort&&c.sort(function(a,j){return j.value-a.value});for(e=0;e<o;e++){if(z&&c[e]*360/q<=1.5){g=e;z=false}if(e>g){z=false;c[g].value+=c[e];c[g].others=true;r=c[g].value}}o=
Math.min(g+1,c.length);r&&c.splice(o)&&(c[g].others=true);for(e=0;e<o;e++){r=y+360*c[e]/q;g=r+360*c[e+1]/q;mangle=(g-r)/2;if(f.init)var D=A(s,t,1,r,g).join(",");r=A(s,t,m,y,y-=360*c[e]/q);g=this.path(f.init?D:r).attr({fill:f.colors&&f.colors[e]||this.g.colors[e]||"#666",stroke:f.stroke||"#fff","stroke-width":f.strokewidth==null?1:f.strokewidth,"stroke-linejoin":"round"});g.value=c[e];g.middle=r.middle;g.mangle=mangle;x.push(g);n.push(g);f.init&&g.animate({path:r.join(",")},+f.init-1||1E3,">")}for(e=
0;e<o;e++){g=u.path(x[e].attr("path")).attr(this.g.shim);f.href&&f.href[e]&&g.attr({href:f.href[e]});g.attr=function(){};p.push(g);n.push(g)}}i.hover=function(a,j){j=j||function(){};for(var d=this,b=0;b<o;b++)(function(k,h,l){var v={sector:k,cover:h,cx:s,cy:t,mx:k.middle.x,my:k.middle.y,mangle:k.mangle,r:m,value:c[l],total:q,label:d.labels&&d.labels[l]};h.mouseover(function(){a.call(v)}).mouseout(function(){j.call(v)})})(n[b],p[b],b);return this};i.each=function(a){for(var j=this,d=0;d<o;d++)(function(b,
k,h){a.call({sector:b,cover:k,cx:s,cy:t,x:b.middle.x,y:b.middle.y,mangle:b.mangle,r:m,value:c[h],total:q,label:j.labels&&j.labels[h]})})(n[d],p[d],d);return this};i.click=function(a){for(var j=this,d=0;d<o;d++)(function(b,k,h){var l={sector:b,cover:k,cx:s,cy:t,mx:b.middle.x,my:b.middle.y,mangle:b.mangle,r:m,value:c[h],total:q,label:j.labels&&j.labels[h]};k.click(function(){a.call(l)})})(n[d],p[d],d);return this};i.inject=function(a){a.insertBefore(p[0])};x=function(a,j,d,b){var k=s+m+m/5,h=t+10;a=
a||[];b=b&&b.toLowerCase&&b.toLowerCase()||"east";d=u.g.markers[d&&d.toLowerCase()]||"disc";i.labels=u.set();for(var l=0;l<o;l++){var v=n[l].attr("fill"),w=c[l].order;c[l].others&&(a[w]=j||"Others");a[w]=u.g.labelise(a[w],c[l],q);i.labels.push(u.set());i.labels[l].push(u.g[d](k+5,h,5).attr({fill:v,stroke:"none"}));i.labels[l].push(v=u.text(k+20,h,a[w]||c[w]).attr(u.g.txtattr).attr({fill:f.legendcolor||"#000","text-anchor":"start"}));p[l].label=i.labels[l];h+=v.getBBox().height*1.2}a=i.labels.getBBox();
i.labels.translate.apply(i.labels,{east:[0,-a.height/2],west:[-a.width-2*m-20,-a.height/2],north:[-m-a.width/2,-m-a.height-10],south:[-m-a.width/2,m+10]}[b]);i.push(i.labels)};f.legend&&x(f.legend,f.legendothers,f.legendmark,f.legendpos);i.push(n,p);i.series=n;i.covers=p;return i};
