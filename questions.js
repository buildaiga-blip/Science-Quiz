const scienceQuizData = {
    "Exploring the Investigative World of Science": {
        "Beginner": [{ "q": "What is the first step of the scientific method?", "options": ["Experiment", "Observation", "Conclusion", "Hypothesis"], "correct": 1, "reason": "Observation allows us to gather data.", "hint": "It involves watching carefully." }],
        "Medium": [{ "q": "Which of these is a variable in an experiment?", "options": ["Constant", "Independent", "Result", "Theory"], "correct": 1, "reason": "An independent variable is what you change.", "hint": "It is the factor you manipulate." }],
        "Advance": [{ "q": "What is a peer-reviewed scientific paper?", "options": ["A draft", "A blog post", "Research reviewed by experts", "A school project"], "correct": 2, "reason": "It ensures validity through expert critique.", "hint": "It involves other scientists." }]
    },
    "The Invisible Living World: Beyond Our Naked Eye": {
        "Beginner": [{ "q": "Which instrument is used to view microorganisms?", "options": ["Telescope", "Microscope", "Stethoscope", "Periscope"], "correct": 1, "reason": "Microscopes magnify tiny objects.", "hint": "Think 'micro' for small." }],
        "Medium": [{ "q": "Which of these is a microorganism?", "options": ["Bacteria", "Earthworm", "Frog", "Fish"], "correct": 0, "reason": "Bacteria are microscopic organisms.", "hint": "They can cause illness." }],
        "Advance": [{ "q": "Which structure is found in plant cells but not animal cells?", "options": ["Nucleus", "Cell Wall", "Ribosome", "Cytoplasm"], "correct": 1, "reason": "The cell wall provides structure.", "hint": "Plants are rigid." }]
    },
    "Health: The Ultimate Treasure": {
        "Beginner": [{ "q": "Which vitamin deficiency causes Scurvy?", "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], "correct": 2, "reason": "Vitamin C is essential for collagen.", "hint": "Found in oranges." }],
        "Medium": [{ "q": "Which mineral is vital for strong bones?", "options": ["Iron", "Calcium", "Zinc", "Copper"], "correct": 1, "reason": "Calcium is the building block of bones.", "hint": "Dairy products have it." }],
        "Advance": [{ "q": "What is a communicable disease?", "options": ["Genetic", "Spread from person to person", "Caused by diet", "Non-infectious"], "correct": 1, "reason": "They are caused by pathogens.", "hint": "Think about flu or colds." }]
    },
    "Electricity: Magnetic and Heating Effects": {
        "Beginner": [{ "q": "What device converts electrical energy into heat?", "options": ["Electric Heater", "Fan", "Light Bulb", "Motor"], "correct": 0, "reason": "Heaters use resistance to create heat.", "hint": "It warms up a room." }],
        "Medium": [{ "q": "What creates a magnetic field?", "options": ["Static charge", "Electric current", "Glass", "Plastic"], "correct": 1, "reason": "Moving charges create magnetism.", "hint": "Electromagnetism." }],
        "Advance": [{ "q": "What is the function of a fuse?", "options": ["Increase voltage", "Prevent overheating", "Store energy", "Measure current"], "correct": 1, "reason": "It breaks the circuit when current is too high.", "hint": "Safety device." }]
    },
    "Exploring Forces": {
        "Beginner": [{ "q": "What force opposes motion between two surfaces?", "options": ["Gravity", "Friction", "Tension", "Magnetism"], "correct": 1, "reason": "Friction resists sliding.", "hint": "Rub your hands together." }],
        "Medium": [{ "q": "What is the unit of force?", "options": ["Joule", "Watt", "Newton", "Pascal"], "correct": 2, "reason": "Forces are measured in Newtons.", "hint": "Named after a famous scientist." }],
        "Advance": [{ "q": "What is Newton's Second Law?", "options": ["F=ma", "Action=Reaction", "Inertia", "Energy conservation"], "correct": 0, "reason": "Force equals mass times acceleration.", "hint": "It is a famous equation." }]
    },
    "Pressure, Winds, Storms, and Cyclones": {
        "Beginner": [{ "q": "In the eye of a cyclone, the pressure is:", "options": ["Very High", "Very Low", "Normal", "Increasing"], "correct": 1, "reason": "The center is a low-pressure zone.", "hint": "It's the calm center." }],
        "Medium": [{ "q": "What causes wind?", "options": ["Temperature difference", "Moon phase", "Ocean tides", "Rotation only"], "correct": 0, "reason": "Air moves from high to low pressure.", "hint": "Warm air rises." }],
        "Advance": [{ "q": "What is the Coriolis effect?", "options": ["Earth's rotation impact", "Wind speed", "Cloud formation", "Ocean currents"], "correct": 0, "reason": "It deflects winds due to rotation.", "hint": "Think about the spinning Earth." }]
    },
    "Particulate Nature of Matter": {
        "Beginner": [{ "q": "Which state has a fixed volume but no fixed shape?", "options": ["Solid", "Liquid", "Gas", "Plasma"], "correct": 1, "reason": "Liquids flow but maintain volume.", "hint": "Like water." }],
        "Medium": [{ "q": "What is the process of a solid turning into a gas?", "options": ["Melting", "Evaporation", "Sublimation", "Condensation"], "correct": 2, "reason": "Sublimation skips the liquid phase.", "hint": "Dry ice does this." }],
        "Advance": [{ "q": "What is Brownian motion?", "options": ["Random particle movement", "Sound waves", "Gravity", "Light reflection"], "correct": 0, "reason": "Particles bump into each other.", "hint": "Named after a botanist." }]
    },
    "Nature of Matter: Elements, Compounds, and Mixtures": {
        "Beginner": [{ "q": "Which of these is a pure substance?", "options": ["Air", "Sea Water", "Gold", "Soil"], "correct": 2, "reason": "Gold is an element.", "hint": "It's a yellow precious metal." }],
        "Medium": [{ "q": "What is a compound?", "options": ["Two or more elements chemically bonded", "A random mix", "A single atom", "A solution"], "correct": 0, "reason": "Chemical bonds make compounds.", "hint": "Like water (H2O)." }],
        "Advance": [{ "q": "How can you separate a mixture of salt and water?", "options": ["Filtering", "Evaporation", "Hand picking", "Magnets"], "correct": 1, "reason": "Water evaporates, salt stays.", "hint": "Heat it up." }]
    },
    "The Amazing World of Solutes, Solvents, and Solutions": {
        "Beginner": [{ "q": "What is known as the universal solvent?", "options": ["Alcohol", "Oil", "Water", "Acetone"], "correct": 2, "reason": "It dissolves more substances than any other.", "hint": "You drink it every day." }],
        "Medium": [{ "q": "What is a saturated solution?", "options": ["Can dissolve more", "Cannot dissolve more solute", "Is very hot", "Is very cold"], "correct": 1, "reason": "It has reached its capacity.", "hint": "Think 'full'." }],
        "Advance": [{ "q": "What happens to solubility as temperature increases?", "options": ["It decreases", "It stays the same", "It usually increases", "It disappears"], "correct": 2, "reason": "Higher kinetic energy helps dissolution.", "hint": "Think of sugar in hot tea." }]
    },
    "Light: Mirrors and Lenses": {
        "Beginner": [{ "q": "Which mirror produces an image of the same size?", "options": ["Concave", "Convex", "Plane", "None"], "correct": 2, "reason": "Plane mirrors show true size.", "hint": "The one in your bathroom." }],
        "Medium": [{ "q": "What does a convex lens do?", "options": ["Converges light", "Diverges light", "Reflects light", "Blocks light"], "correct": 0, "reason": "It focuses light to a point.", "hint": "Used in magnifying glasses." }],
        "Advance": [{ "q": "What is refraction?", "options": ["Bending of light", "Reflection", "Absorption", "Diffusion"], "correct": 0, "reason": "Light bends crossing mediums.", "hint": "Pencil in a glass of water." }]
    },
    "Keeping Time with the Skies": {
        "Beginner": [{ "q": "What movement of Earth determines a 'day'?", "options": ["Orbit", "Rotation", "Gravity", "Atmosphere"], "correct": 1, "reason": "One rotation on its axis.", "hint": "Spinning." }],
        "Medium": [{ "q": "How long does Earth take to orbit the Sun?", "options": ["24 hours", "30 days", "365 days", "10 years"], "correct": 2, "reason": "It defines our year.", "hint": "A full trip around the Sun." }],
        "Advance": [{ "q": "What are the phases of the moon caused by?", "options": ["Clouds", "Sunlight angle", "Shadows", "Earth's orbit"], "correct": 1, "reason": "Different amounts of the lit side are visible.", "hint": "It changes shape monthly." }]
    },
    "How Nature Works in Harmony": {
        "Beginner": [{ "q": "What is the process by which plants make food?", "options": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"], "correct": 1, "reason": "Plants use light to make glucose.", "hint": "Green leaves." }],
        "Medium": [{ "q": "What is an ecosystem?", "options": ["Just animals", "Community of living and non-living things", "A city", "A single species"], "correct": 1, "reason": "Everything interacts together.", "hint": "Like a forest." }],
        "Advance": [{ "q": "What is a food web?", "options": ["A map", "Interconnected food chains", "A diet plan", "A single predator"], "correct": 1, "reason": "It shows complex energy transfer.", "hint": "Many chains linked." }]
    },
    "Our Home: Earth, a Unique Life Sustaining Planet": {
        "Beginner": [{ "q": "Which gas is most abundant in Earth's atmosphere?", "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], "correct": 2, "reason": "Nitrogen is about 78%.", "hint": "Not oxygen." }],
        "Medium": [{ "q": "What protects Earth from UV radiation?", "options": ["Ozone layer", "Clouds", "Gravity", "Ocean"], "correct": 0, "reason": "Ozone absorbs harmful rays.", "hint": "In the upper atmosphere." }],
        "Advance": [{ "q": "What causes the greenhouse effect?", "options": ["Too much oxygen", "Trapped heat by gases", "Too much wind", "Ice caps"], "correct": 1, "reason": "Greenhouse gases trap infrared radiation.", "hint": "Like a car on a sunny day." }]
    }
};