import{initializeApp}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import*as fs from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import*as au from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// Firebase konsolundaki web uygulaması değerlerini buraya yaz
const app=initializeApp({apiKey:"BURAYA",authDomain:"PROJE.firebaseapp.com",projectId:"PROJE",appId:"BURAYA"});
export{fs,au};export const db=fs.getFirestore(app),auth=au.getAuth(app);
export const $=s=>document.querySelector(s);
export const e=s=>String(s??"").replace(/[&<>"]/g,c=>"&#"+c.charCodeAt(0)+";");
export const TL=n=>(+n).toLocaleString("tr-TR")+" ₺";
export const today=()=>new Date().toLocaleDateString("sv-SE");
export const THEMES={
klasik:{n:"Klasik",bg:"#eef3ee",card:"#ffffff",ink:"#1f2a24",accent:"#2f6b4f",emoji:"☕"},
sevgililer:{n:"Sevgililer Günü",bg:"#fff0f3",card:"#ffffff",ink:"#4a1626",accent:"#d6336c",emoji:"💝"},
yilbasi:{n:"Yılbaşı",bg:"#f1f6f9",card:"#ffffff",ink:"#14301f",accent:"#c0392b",emoji:"🎄"},
anneler:{n:"Anneler Günü",bg:"#fdf4fb",card:"#ffffff",ink:"#3d1f3a",accent:"#a24fb0",emoji:"🌷"},
bayram:{n:"Bayram",bg:"#f3f7fb",card:"#ffffff",ink:"#12304a",accent:"#0f8b8d",emoji:"🌙"},
cadilar:{n:"Cadılar Bayramı",bg:"#1b1423",card:"#2a2035",ink:"#f5ecff",accent:"#ff7a1a",emoji:"🎃"}};
const DEF={name:"Kafem",theme:THEMES.klasik,delivery:{mode:"fixed",fee:30,min:300,regions:[]}};
export const applyTheme=t=>{for(const k of["bg","card","ink","accent"])document.documentElement.style.setProperty("--"+k,t[k])};
export const getSettings=async()=>{const s=await fs.getDoc(fs.doc(db,"settings","main"));return{...DEF,...(s.exists()?s.data():{})}};
export const fee=(d,sub,r)=>d.mode=="fixed"?+d.fee:d.mode=="free_min"?(sub>=d.min?0:+d.fee):d.mode=="region"?+(d.regions.find(x=>x.n==r)?.f||0):0;
export function gate(roles,start){let on=0;
 $("#gbtn").onclick=()=>au.signInWithPopup(auth,new au.GoogleAuthProvider());
 $("#out").onclick=()=>au.signOut(auth);
 au.onAuthStateChanged(auth,async u=>{let ok=0;
  if(u){try{const s=await fs.getDoc(fs.doc(db,"staff",u.email));ok=s.exists()&&roles.includes(s.data().role)}catch{}
   $("#msg").textContent=ok?"":u.email+" için yetki yok.";}
  $("#gate").hidden=!!ok;$("#app").hidden=!ok;
  if(ok&&!on++)start(u);});}
