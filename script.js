document.addEventListener("DOMContentLoaded", function () {
        const hamburgerBtn = document.getElementById("bdaHamburgerBtn");
        const navMenu = document.getElementById("bdaNavMenu");
        const searchTrigger = document.getElementById("bdaMobileSearchTrigger");
        const searchForm = document.getElementById("bdaSearchForm");

        // 1. HEMBURG BUTTON CLICK(TO OPEN/CLOSE MOBILE MENU)
        if (hamburgerBtn && navMenu) {
            hamburgerBtn.addEventListener("click", function (event) {
                event.stopPropagation(); // TO STOP CLICK OUT
                
                // ON/OFF MENU 
                navMenu.classList.toggle("bda-menu-open");
                // ALL TREE LINE TO BE 'X' MARK
                hamburgerBtn.classList.toggle("bda-close-toggle");
                
                // SAFTY CHECK IF AT TIME OF PENING MENU SEARCH BOX IS OPEN THET IT WILL CLOSE THE SEARCH BOX 
                if (searchForm) {
                    searchForm.classList.remove("bda-search-open");
                }
            });
        }
             //====================ye bad me dala hua java script hai vajah thi loginbutton close karne pe search ka drop down notification khula mil rha tha================
            // 2. क्लोज (X) बटन पर क्लिक करने पर पॉप-अप बंद हो जाए (Updated with StopPropagation)
    if (closeAuthBtn) {
        closeAuthBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // सबसे ज़रूरी: यह क्लिक इवेंट को पीछे मौजूद सर्च कॉलम तक जाने से रोकेगा!
            
            authOverlay.classList.remove('open-popup');
        });
    }

    // 3. अगर यूज़र फॉर्म से बाहर खाली जगह (Overlay) पर क्लिक करे, तो बंद हो जाए
    if (authOverlay) {
        authOverlay.addEventListener('click', (e) => {
            if (e.target === authOverlay) {
                e.preventDefault();
                e.stopPropagation();
                authOverlay.classList.remove('open-popup');
            }
        });
    }


        // 2. SEARCH ICON CLIC सर्च आइकॉन क्लिक (MOBILE SEARCH BOX ON/OFF)
        if (searchTrigger && searchForm) {
            searchTrigger.addEventListener("click", function (event) {
                event.stopPropagation(); // TO STOP CLICK TO GO OUT
                
                // SEARCH BOX ON/OFF
                searchForm.classList.toggle("bda-search-open");
                
                // SAFTY CHECK: AT TIME OF OPENING SEARCH IF MENU IS OPEN THEN IT WILL COLSE THE MENU
                if (navMenu && hamburgerBtn) {
                    navMenu.classList.remove("bda-menu-open");
                    hamburgerBtn.classList.remove("bda-close-toggle");
                }
            });
        }

        // 3. ON ANY WHERE ON SCREEN IS CLICK OPENED MENU IS CLOSSED
        document.addEventListener("click", function (event) {
            // अगर क्लिक मेनू या हैमबर्गर बटन के अंदर नहीं हुआ है, तो मेनू बंद करें
            if (navMenu && !navMenu.contains(event.target) && hamburgerBtn && !hamburgerBtn.contains(event.target)) {
                navMenu.classList.remove("bda-menu-open");
                hamburgerBtn.classList.remove("bda-close-toggle");
            }
            
            // अगर क्लिक सर्च फॉर्म या सर्च आइकॉन के अंदर नहीं हुआ है, तो सर्च बंद करें
            if (searchForm && !searchForm.contains(event.target) && searchTrigger && !searchTrigger.contains(event.target)) {
                searchForm.classList.remove("bda-search-open");
            }
        });
    });
//===================Reach us page java starts====================//
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("premiumContactForm");
    const statusAlert = document.getElementById("formStatus");

    // Input Group Verification Dynamic Error Tracker system handler function
    const validateField = (inputEl, errorEl, verificationCondition) => {
        const groupContainer = inputEl.parentElement;
        if (verificationCondition) {
            groupContainer.classList.remove("invalid-trigger");
            return true;
        } else {
            groupContainer.classList.add("invalid-trigger");
            return false;
        }
    };

    // Form submission processing interface engine trigger logic
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Default tracking reloading process block override

        const name = document.getElementById("userName");
        const email = document.getElementById("userEmail");
        const phone = document.getElementById("userPhone");
        const message = document.getElementById("userMessage");

        // Advanced regular expression templates testing validations checks arrays
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/; // Indian standard 10 digit number checker filter rules

        // Fields dynamic processing validation execution steps arrays arrays
        const isNameValid = validateField(name, null, name.value.trim() !== "");
        const isEmailValid = validateField(email, null, emailRegex.test(email.value.trim()));
        const isPhoneValid = validateField(phone, null, phoneRegex.test(phone.value.trim()));
        const isMessageValid = validateField(message, null, message.value.trim() !== "");

        // Universal checking verification structural rules validation passes conditional logic
        if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
            
            // Premium Button dynamic loading state visual trigger simulation engine setup
            const btn = document.getElementById("submitBtn");
            const btnText = btn.querySelector(".btn-text");
            btn.style.pointerEvents = "none";
            btnText.textContent = "Sending Verification...";

            setTimeout(() => {
                // Return response success validation banner system alert message displays
                statusAlert.className = "status-alert success";
                statusAlert.textContent = "Thank you! Your inquiry message request has been sent successfully.";
                
                // Reset inputs parameters systems setup array clean clear methods
                form.reset();
                btn.style.pointerEvents = "auto";
                btnText.textContent = "Send Message";

                // Fade away system clear visual elements tracker timeout loop processes
                setTimeout(() => {
                    statusAlert.style.display = "none";
                }, 5000);

            }, 1500);

        } else {
            // Error alerts setup instructions parameters array notifications layers logic execution
            statusAlert.style.display = "none";
        }
    });

    // Realtime error removal on key stroke focus triggers handler configuration engine
    const inputsList = form.querySelectorAll("input, textarea");
    inputsList.forEach((element) => {
        element.addEventListener("input", () => {
            if (element.parentElement.classList.contains("invalid-trigger")) {
                element.parentElement.classList.remove("invalid-trigger");
            }
        });
    });
});
//===================Reach us page java ends=====================//
//===================Flaoting Map button Ke Liye Script============//
document.addEventListener("DOMContentLoaded", function() {
    const mapBtn = document.getElementById("openMapModal");
    const mapModal = document.getElementById("mapModal");
    const closeBtn = document.getElementById("closeMapModal");

    // बटन क्लिक करने पर मैप पॉपअप खोलें
    if(mapBtn && mapModal) {
        mapBtn.addEventListener("click", function(e) {
            e.preventDefault();
            mapModal.style.display = "flex";
        });
    }

    // X पर क्लिक करने पर बंद करें
    if(closeBtn && mapModal) {
        closeBtn.addEventListener("click", function() {
            mapModal.style.display = "none";
        });
    }

    // बाहर डार्क एरिया में क्लिक करने पर भी बंद करें
    window.addEventListener("click", function(e) {
        if (e.target === mapModal) {
            mapModal.style.display = "none";
        }
    });
});
//================Flaoting Map button Ke Liye Script khatam hua================//
//================testimonial/what clints says about us page starts============//
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const reviewCards = document.querySelectorAll(".review-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active classes from other control filter action elements
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            
            // Inject current selected target button focus highlights
            button.classList.add("active");

            const filterValue = button.getAttribute("data-target");

            reviewCards.forEach((card) => {
                const cardCategory = card.getAttribute("data-category");

                // Check evaluation match parameters rules filters logic
                if (filterValue === "all" || filterValue === cardCategory) {
                    // Smooth delay entrance animation effect triggers setup
                    card.classList.remove("hide-card");
                    card.style.opacity = "0";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transition = "opacity 0.4s ease";
                    }, 50);
                } else {
                    // Hide other mismatched category structural box blocks rows
                    card.classList.add("hide-card");
                }
            });
        });
    });
});
//==================testimonial/what clints says about us page Ends============//
//==========================login java script==================================//
document.addEventListener("DOMContentLoaded", () => {
    const authCard = document.getElementById('authCard');
    const toSignUp = document.getElementById('toSignUp');
    const toSignIn = document.getElementById('toSignIn');
    const brandTitle = document.getElementById('brandTitle');
    const brandDesc = document.getElementById('brandDesc');

    // Smooth UI State Switch Event Handlers
    toSignUp.addEventListener('click', () => {
        authCard.classList.add('show-signup');
        // Dynamic Side Text Content Adaptation (Optional Premium Detail)
        brandTitle.innerText = "Join Our Global Medical Supply Network";
        brandDesc.innerText = "Create your secure portal identity to unlock instant pricing, tracking matrices, and enterprise grade system integrations.";
    });

    toSignIn.addEventListener('click', () => {
        authCard.classList.remove('show-signup');
        brandTitle.innerText = "Premium Solutions For Global Medical Supply";
        brandDesc.innerText = "Access your secure executive dashboard to manage high-precision medical instruments and steel system integrations.";
    });

    // Password Visibility Masking Toggles
    const maskIcons = document.querySelectorAll('.toggle-mask');
    maskIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const pwdInput = this.parentElement.querySelector('.pwd-field');
            if(pwdInput.type === 'password') {
                pwdInput.type = 'text';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            } else {
                pwdInput.type = 'password';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            }
        });
    });
});
//=============================on click get opent java section======================// 
          document.addEventListener("DOMContentLoaded", () => {
    const sectionLoginTrigger = document.querySelector('.section-login-trigger');
    const sectionSignupTrigger = document.querySelector('.section-signup-trigger');
    const dropZone = document.getElementById('dropZone');
    const docInput = document.getElementById('documentUploadInput');
    const fileListName = document.getElementById('fileListName');

    // मोबाइल व्यू फंक्शन को सुरक्षित कॉल करने के लिए चेक
    function syncMobileView() {
        if (typeof updateMobileFormVisibility === "function") {
            updateMobileFormVisibility();
        }
    }

    // निचले दोनों नए एक्शन बटन्स पर क्लिक करने पर सीधे पॉप-अप को सही फ़ॉर्म के साथ खोलना
    if (sectionLoginTrigger) {
        sectionLoginTrigger.addEventListener('click', () => {
            authCard.classList.remove('show-signup'); 
            authOverlay.classList.add('open-popup');
            if (brandTitle) brandTitle.innerText = "Premium Solutions For Global Medical Supply";
            if (brandDesc) brandDesc.innerText = "Access your secure executive dashboard to manage integrations.";
            syncMobileView();
        });
    }

    if (sectionSignupTrigger) {
        sectionSignupTrigger.addEventListener('click', () => {
            authCard.classList.add('show-signup'); 
            authOverlay.classList.add('open-popup');
            if (brandTitle) brandTitle.innerText = "Join Our Global Medical Supply Network";
            if (brandDesc) brandDesc.innerText = "Create your secure portal identity to unlock instant pricing.";
            syncMobileView();
        });
    }

    // ड्रैग-एंड-ड्रॉप और मोबाइल क्लिक फाइल अपलोडर कोर लॉजिक
    if (dropZone && docInput) {
        dropZone.addEventListener('click', () => docInput.click());

        docInput.addEventListener('change', () => {
            if (docInput.files.length > 0) {
                let names = Array.from(docInput.files).map(f => f.name).join(', ');
                fileListName.innerText = "Selected: " + names;
                fileListName.style.color = "var(--auth-navy)";
            } else {
                fileListName.innerText = "No file selected";
                fileListName.style.color = "var(--auth-orange)";
            }
        });

        // ड्रैग ओवर एनिमेशन इफेक्ट्स (डेस्कटॉप सपोर्ट)
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = "var(--auth-navy)";
            dropZone.style.background = "#f0f4f8";
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.style.borderColor = "var(--auth-border)";
            dropZone.style.background = "#f8fafc";
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = "var(--auth-border)";
            dropZone.style.background = "#f8fafc";
            
            if (e.dataTransfer.files.length > 0) {
                docInput.files = e.dataTransfer.files;
                let names = Array.from(docInput.files).map(f => f.name).join(', ');
                fileListName.innerText = "Dropped: " + names;
                fileListName.style.color = "var(--auth-navy)";
            }
        });
    }

    const authOverlay = document.getElementById('authOverlay');
    const authCard = document.getElementById('authCard');
    const closeAuthBtn = document.getElementById('closeAuthBtn');
    
    // वेबसाइट के Navbar वाले बटन की ID (जिससे लॉगिन फॉर्म खुलेगा)
    const navSignUpBtn = document.getElementById('navSignUpBtn'); 
    
    const toSignUp = document.getElementById('toSignUp');
    const toSignIn = document.getElementById('toSignIn');
    const brandTitle = document.getElementById('brandTitle');
    const brandDesc = document.getElementById('brandDesc');

    // 1. मोबाइल और डेस्कटॉप दोनों के लिए फॉर्म विज़िबिलिटी को मैनेज करने वाला फंक्शन
    function updateMobileFormVisibility() {
        // अगर स्क्रीन छोटी है (850px से कम)
        if (window.innerWidth <= 850) {
            const signInBox = document.querySelector('.auth-overlay .signin-box');
            const signUpBox = document.querySelector('.auth-overlay .sign-up-box');
            
            if (signInBox && signUpBox) {
                if (authCard.classList.contains('show-signup')) {
                    signInBox.style.setProperty('display', 'none', 'important');
                    signUpBox.style.setProperty('display', 'flex', 'important');
                } else {
                    signInBox.style.setProperty('display', 'flex', 'important');
                    signUpBox.style.setProperty('display', 'none', 'important');
                }
            }
        }
    }

    // 2. जब यूज़र Navbar के बटन पर क्लिक करे तो पॉप-अप खुले
    if (navSignUpBtn) {
        navSignUpBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            authOverlay.classList.add('open-popup');
            updateMobileFormVisibility(); // मोबाइल चेक रन करें
        });
    }

    // 3. क्लोज (X) बटन पर क्लिक करने पर पॉप-अप बंद हो जाए
    if (closeAuthBtn) {
        closeAuthBtn.addEventListener('click', () => {
            authOverlay.classList.remove('open-popup');
        });
    }

    // 4. अगर यूज़र फॉर्म से बाहर खाली जगह (Overlay) पर क्लिक करे, तो बंद हो जाए
    if (authOverlay) {
        authOverlay.addEventListener('click', (e) => {
            if (e.target === authOverlay) {
                authOverlay.classList.remove('open-popup');
            }
        });
    }

    // 5. साइन-अप फॉर्म पर स्विच करने का लॉजिक
    if (toSignUp) {
        toSignUp.addEventListener('click', () => {
            authCard.classList.add('show-signup');
            if (brandTitle) brandTitle.innerText = "Join Our Global Medical Supply Network";
            if (brandDesc) brandDesc.innerText = "Create your secure portal identity to unlock instant pricing.";
            updateMobileFormVisibility(); // मोबाइल व्यू को तुरंत अपडेट करें
        });
    }

    // 6. लॉगिन (Sign In) फॉर्म पर वापस आने का लॉजिक
    if (toSignIn) {
        toSignIn.addEventListener('click', () => {
            authCard.classList.remove('show-signup');
            if (brandTitle) brandTitle.innerText = "Premium Solutions For Global Medical Supply";
            if (brandDesc) brandDesc.innerText = "Access your secure executive dashboard to manage integrations.";
            updateMobileFormVisibility(); // मोबाइल व्यू को तुरंत अपडेट करें
        });
    }

    // स्क्रीन का साइज़ छोटा-बड़ा होने पर भी फॉर्म की विज़िबिलिटी चेक होती रहे
    window.addEventListener('resize', updateMobileFormVisibility);

    // 7. पासवर्ड शो/हाइड करने का लॉजिक
    const maskIcons = document.querySelectorAll('.toggle-mask');
    maskIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const pwdInput = this.parentElement.querySelector('.pwd-field');
            if (pwdInput) {
                if (pwdInput.type === 'password') {
                    pwdInput.type = 'text';
                    this.classList.remove('fa-eye-slash');
                    this.classList.add('fa-eye');
                } else {
                    pwdInput.type = 'password';
                    this.classList.remove('fa-eye');
                    this.classList.add('fa-eye-slash');
                }
            }
        });
    });
});

//=================on click get open java======================//


