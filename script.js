document.addEventListener('DOMContentLoaded', () => {
    // ────────────────────────────────────────────────
    // Recruiters Data with Logos
    // ────────────────────────────────────────────────
    const recruiters = [
        { name: "ZOHO", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/zoho-logo-512_gvy0aw.png" },
        { name: "Adani", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/Adani_2012_logo_iqeu3o.png" },
        { name: "Malabar Group", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/images_scvzhq.png" },
        { name: "WHITECORN GROUP", logo: "" },
        { name: "Hotel Dimora Thiruvananthapuram", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/images_1_ybiwrf.png" },
        { name: "Belstar Microfinance Limited (Muthoot Group)", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/logo_vxufj4.png" },
        { name: "Muthoot Microfin Ltd", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/Muthoot-Fincorp-Logo-Vector.svg-_amjj03.png" },
        { name: "Professional Hospitality & Support Services", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/logo_1_qvfplb.png" },
        { name: "Muralya Dairy Products Pvt Ltd", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/FW0o61HVUAAPUJ3_tpvf7i.png" },
        { name: "PIONEER MOTORS", logo: "" },
        { name: "BSPioneer Vehicles And Services Pvt Ltd", logo: "" },
        { name: "LIFE CARE", logo: "" },
        { name: "Popular Motor World PVT LTD", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/images_2_pnpkir.png" },
        { name: "Lemon Tree Premier Thiruvananthapuram", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/5-1_qjj0sa.jpg" },
        { name: "Electa Energy Pvt Ltd", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/2026-02-22_12_04_51_odrasu.png" },
        { name: "SWIGGY", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/swiggy-logo_brandlogos.net_fplmb_c8o479.png" },
        { name: "Trinity SkillWorks Private Limited", logo: "" },
        { name: "Team waves", logo: "" },
        { name: "Ayur herbals", logo: "" },
        { name: "Info Apps", logo: "" }
    ];

    // ────────────────────────────────────────────────
    // Sectors Data
    // ────────────────────────────────────────────────
    const sectors = [
        "Retail", "Manufacturing", "Distribution", "Logistics",
        "Hospitality", "Hotel", "Dairy", "Automobile",
        "Commercial Vehicle", "Energy", "Healthcare", "Hospital Management",
        "Banking", "Financial Services", "Insurance",
        "MFI-NBFC", "Sales", "IT", "BPO Services", "Education", "Entertainment",
        "Delivery Services", "Pharmaceuticals", "Construction"
    ];

    const sectorIcons = {
        "Retail": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
        // ... (keep all your sectorIcons as they were – I shortened for brevity)
        "Construction": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14 2.3 6.3"/><path d="m14 14 7.7-7.7"/></svg>`
    };

    // ────────────────────────────────────────────────
    // Populate Year of Passing Dropdown (2026 to 1980)
    // ────────────────────────────────────────────────
    const yearSelect = document.getElementById('yearOfPassing');
    if (yearSelect) {
        for (let year = 2026; year >= 1980; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        }
    }

    // ────────────────────────────────────────────────
    // Recruiters Carousel
    // ────────────────────────────────────────────────
    const track = document.getElementById('recruiters-track');
    function createLogoCard(company) {
        const div = document.createElement('div');
        div.className = 'logo-card';
        if (company.logo) {
            div.innerHTML = `<img src="${company.logo}" alt="${company.name}">`;
        } else {
            div.innerHTML = `<span>${company.name}</span>`;
        }
        return div;
    }
    [...recruiters, ...recruiters].forEach(company => {
        track.appendChild(createLogoCard(company));
    });

    // ────────────────────────────────────────────────
    // Sectors Dual Carousel
    // ────────────────────────────────────────────────
    const sectorsTrack1 = document.getElementById('sectors-track-1');
    const sectorsTrack2 = document.getElementById('sectors-track-2');
    if (sectorsTrack1 && sectorsTrack2) {
        const half = Math.ceil(sectors.length / 2);
        const row1 = sectors.slice(0, half);
        const row2 = sectors.slice(half);
        [...row1, ...row1].forEach(name => sectorsTrack1.appendChild(createSectorCard(name)));
        [...row2, ...row2].forEach(name => sectorsTrack2.appendChild(createSectorCard(name)));
    }

    function createSectorCard(name) {
        const div = document.createElement('div');
        div.className = 'logo-card';
        const iconContent = sectorIcons[name] || name.charAt(0);
        div.innerHTML = `<div class="card-icon">${iconContent}</div><span>${name}</span>`;
        return div;
    }

    // ────────────────────────────────────────────────
    // Stats Counter Animation
    // ────────────────────────────────────────────────
    const stats = [
        { id: 'stat-companies', target: 100, suffix: '+' },
        { id: 'stat-vacancies', target: 1000, suffix: '+' },
        { id: 'stat-package', target: 10, suffix: ' LPA' }
    ];

    function animateValue(obj, start, end, duration, suffix) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => {
                    const el = document.getElementById(stat.id);
                    if (el) animateValue(el, 0, stat.target, 2000, stat.suffix);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) statsObserver.observe(statsSection);

    // ────────────────────────────────────────────────
    // Populate Preferred Sectors Checkboxes + Max 3 limit
    // ────────────────────────────────────────────────
    const sectorContainer = document.getElementById('sector-checkboxes');
    sectors.forEach(name => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" name="preferredSector" value="${name}"> ${name}`;
        sectorContainer.appendChild(label);
    });

    sectorContainer.addEventListener('change', () => {
        const checked = sectorContainer.querySelectorAll('input:checked');
        sectorContainer.querySelectorAll('input').forEach(cb => {
            cb.disabled = (checked.length >= 3 && !cb.checked);
        });
    });

    // ────────────────────────────────────────────────
    // Age Calculation from DOB
    // ────────────────────────────────────────────────
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    dobInput.addEventListener('change', () => {
        if (!dobInput.value) return;
        const dob = new Date(dobInput.value);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
        ageInput.value = age;
    });

    // ────────────────────────────────────────────────
    // Employment Status Toggle
    // ────────────────────────────────────────────────
    const toggle = document.getElementById('employment-status-toggle');
    const expDetails = document.getElementById('experience-details');
    const expInputs = expDetails.querySelectorAll('input, select');

    toggle.addEventListener('change', (e) => {
        if (e.target.value === 'Experienced') {
            expDetails.classList.remove('hidden');
            expInputs.forEach(input => input.required = true);
        } else {
            expDetails.classList.add('hidden');
            expInputs.forEach(input => input.required = false);
        }
    });

    // ────────────────────────────────────────────────
    // Form Submission → Google Apps Script (Fixed for Pincode & All Fields)
    // ────────────────────────────────────────────────
    const form = document.getElementById('placementForm');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyvI1SxTqioDr9ubaeykXpOODg8nxhAuhc-OuUpnTBhGR8KE3iE7Ryh45l0erADDEQ/exec'; // ← YOUR WEB APP URL

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Submitting...';

        // Use original FormData – this is the key fix
        const formData = new FormData(form);

        // Add extra/computed fields
        formData.set('action', 'register');

        // Handle multiple preferred sectors
        const preferredSectors = form.querySelectorAll('input[name="preferredSector"]:checked');
        formData.set('sector1', preferredSectors[0]?.value || '');
        formData.set('sector2', preferredSectors[1]?.value || '');
        formData.set('sector3', preferredSectors[2]?.value || '');

        // Handle multiple locations
        const locations = form.querySelectorAll('input[name="location"]:checked');
        const locationValues = Array.from(locations).map(cb => cb.value);
        formData.set('preferredJobLocation', locationValues.join(', '));

        // Pincode is already in formData (name="pincode") – no need to touch it
        // It will be sent as text/string automatically

        fetch(scriptURL, {
            method: 'POST',
            body: formData   // ← IMPORTANT: send FormData directly (not JSON)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                const modal = document.getElementById('successModal');
                modal.style.display = 'flex';
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
                form.reset();
                expDetails.classList.add('hidden');
            } else {
                alert('Error: ' + (result.error || 'Submission failed'));
            }
        })
        .catch(error => {
            console.error('Submission Error:', error);
            alert('Could not connect to Google Sheet. Check your Apps Script web app URL and deployment.');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        });
    });
});
