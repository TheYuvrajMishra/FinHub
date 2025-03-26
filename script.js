const homeImage = document.getElementById('image1');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const mouseX = clientX / window.innerWidth - 0.5;
    const mouseY = -(clientY / window.innerHeight - 0.5);
    const perspective = 80; // Adjust the perspective value as needed
    const depth = 100; // Adjust the depth value as needed

    homeImage.style.transform = `rotateX(${mouseY * perspective}deg) rotateY(${mouseX * perspective}deg) translateZ(${depth}px)`;
});
document.addEventListener('mouseleave', () => {
    homeImage.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
});


const caTasks = [
    "Company Incorporation",
      "GST Registration & Filing",
      "Income Tax Return Filing",
      "Internal Audit",
      "Tax Audit",
      "Bookkeeping & Accounting",
      "Payroll Processing",
      "TDS Return Filing",
      "Project Report Preparation",
      "Loan CMA Report",
      "Financial Statement Finalization",
      "ROC Filing - AOC-4 & MGT-7",
      "ESI & PF Return Filing",
      "Virtual CFO Services",
      "Business Valuation",
      "Due Diligence Reports",
      "Startup India Registration",
      "Trademark Registration",
      "LLP Formation",
      "Section 8 Company Registration",
      "MSME Registration",
      "Compliance Calendar Setup",
      "Investment Advisory",
      "Form 15CA/15CB Filing",
      "Foreign Remittance Compliance",
      "Transfer Pricing",
      "Statutory Audit Assistance",
      "DSC Management",
      "SME IPO Advisory",
      "NRI Taxation",
      "Capital Gain Computation",
      "Representation before IT Dept",
      "Reply to GST Notices",
      "Cash Flow Projections",
      "Digital Marketing for CA Firms",
      "Tally Customization",
      "Startup Pitch Deck Creation",
      "Equity Dilution Strategy",
      "PAN/TAN Application",
      "Section 43B(h) MSME Compliance",
      "Import Export Code (IEC)",
      "Startup Funding Support",
      "Accounting Software Setup",
      "GST LUT Filing",
      "Reverse Charge Mechanism Advisory",
      "HSN/SAC Classification",
      "Financial Planning & Analysis",
      "Partnership Deed Drafting",
      "Retainer Agreement Drafting",
      "DSC Renewal Reminders"
  ];
function createMarqueeContent(tasks, repeat = 2) {
    const fullList = [];
    for (let i = 0; i < repeat; i++) {
      tasks.forEach(task => {
        fullList.push(`<span><strong>|</strong> ${task}</span>`);
      });
    }
    return fullList.join('');
  }

  // Ensures long enough content to loop without gaps
  const repeatedTimes = 10; // Increase if screen still shows gaps

  document.getElementById("track1").innerHTML = createMarqueeContent(caTasks, repeatedTimes);
  const track2 = document.getElementById("track2");
  if (track2) {
    track2.innerHTML = createMarqueeContent([...caTasks].reverse(), repeatedTimes);
  }
  


 
 
 
  const glow = document.getElementById('glow-shadow');

  document.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX - 30}px, ${e.clientY - 120}px)`;
  });





  
  const fonts = [
    // Clean & modern sans-serifs
    `'Inter', sans-serif`,
    `'Poppins', sans-serif`,
    `'IBM Plex Sans', sans-serif`,
    `'Work Sans', sans-serif`,

    `'Cabinet Grotesk', sans-serif`,
    `'Sora', sans-serif`,
    `'Space Grotesk', sans-serif`,
    
    // Professional serifs (great for editorial or formal content)
    `'Merriweather', serif`,
    `'Lora', serif`,
    `'Playfair Display', serif`,
    `'DM Serif Text', serif`,
  
    // Monospace (great for code or UI/UX with a tech feel)
    `'Fira Code', monospace`,
    `'Source Code Pro', monospace`,
    `'JetBrains Mono', monospace`,
  
    // Humanist/Geometric blends (aesthetic and user-friendly)
    
    
    // Stylish/Display fonts for headings or branding

  ];
  
  const loadingScreen = document.getElementById('loading-screen');
  let i = 0;
  
  const interval = setInterval(() => {
    loadingScreen.style.opacity = 0;
    setTimeout(() => {
      loadingScreen.style.fontFamily = fonts[i % fonts.length];
      loadingScreen.innerText = 'FINHUB';
      loadingScreen.style.opacity = 1;
      i++;
    }, 150); // wait for fade-out before changing font
  }, 300); // controls speed of font switch
  
  setTimeout(() => {
    clearInterval(interval);
    loadingScreen.classList.add('hidden');
    document.body.classList.remove('white-bg');
    document.body.classList.add('dark-bg');
    document.getElementById('main-site').style.display = 'block';
  }, 3000);
  

  


const navToggle = document.getElementById('page-nav-toggle');
const navLinks = document.querySelectorAll('.main-navigation a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.checked = false;
  });
});
