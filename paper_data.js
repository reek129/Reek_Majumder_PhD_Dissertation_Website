// Abstracts and related data
const paperData = {
    paper1: {
        abstract: "The environmental impacts of global warming driven by methane (CH4) emissions have catalyzed significant research initiatives in developing novel technologies that enable proactive and rapid detection of CH4. Several data-driven machine learning (ML) models were tested to determine how well they identified fugitive CH4 and its related intensity in the affected areas. Various meteorological characteristics, including wind speed, temperature, pressure, relative humidity, water vapor, and heat flux, were included in the simulation. We used the ensemble learning method to determine the best-performing weighted ensemble ML models built upon several weaker lower-layer ML models to (i) detect the presence of CH4 as a classification problem and (ii) predict the intensity of CH4 as a regression problem. The classification model performance for CH4 detection was evaluated using accuracy, F1 score, Matthew’s Correlation Coefficient (MCC), and the area under the receiver operating characteristic curve (AUC ROC), with the top-performing model being 97.2%, 0.972, 0.945 and 0.995, respectively. The R 2 score was used to evaluate the regression model performance for CH4 intensity prediction, with the R 2 score of the best-performing model being 0.858. The ML models developed in this study for fugitive CH4 detection and intensity prediction can be used with fixed environmental sensors deployed on the ground or with sensors mounted on unmanned aerial vehicles (UAVs) for mobile detection.",
        pdfLink: "pdf/Phd_paper1.pdf",
        githubLink: "https://github.com/reek129/Environmental-Monitoring-for-Methane-Leak"
    },
    paper2: {
        abstract: "The network of services, including delivery, farming, and environmental monitoring, has experienced exponential expansion in the past decade with Unmanned Aerial Vehicles (UAVs). Yet, UAVs are not robust enough against cyberattacks, especially on the Controller Area Network (CAN) bus. The CAN bus is a general-purpose vehicle-bus standard to enable microcontrollers and in-vehicle computers to interact, primarily connecting different Electronic Control Units (ECUs). In this study, we focus on solving some of the most critical security weaknesses in UAVs by developing a novel graph-based intrusion detection system (IDS) leveraging the Uncomplicated Application-level Vehicular Communication and Networking (UAVCAN) protocol. First, we decode CAN messages based on UAVCAN protocol specification; second, we present a comprehensive method of transforming tabular UAVCAN messages into graph structures. Lastly, we apply various graph-based machine learning models for detecting cyber-attacks on the CAN bus, including graph convolutional neural networks (GCNNs), graph attention networks (GATs), Graph Sample and Aggregate Networks (GraphSAGE), and graph structure-based transformers. Our findings show that inductive models such as GATs, GraphSAGE, and graph-based transformers can achieve competitive and even better accuracy than transductive models like GCNNs in detecting various types of intrusions, with minimum information on protocol specification, thus providing a generic robust solution for CAN bus security for the UAVs. We also compared our results with baseline single-layer Long Short-Term Memory (LSTM) and found that all our graph-based models perform better without using any decoded features based on the UAVCAN protocol, highlighting higher detection performance with protocol-independent capability.  ",
        pdfLink: "pdf/Phd_paper2.pdf",
        githubLink: "https://github.com/reek129/Graph-based-defense-on-UAVCAN-data"
    },
    paper3: {
        abstract: "Deep Learning (DL)-based image classi cation models are essential for autonomous vehicle (AV) perception modules since incorrect categorization might have severe repercussions. Adversarial attacks are widely studied cyberattacks that can lead DL models to predict inaccurate output, such as incorrectly classi ed tra c signs by the perception module of an autonomous vehicle. In this study, we create and compare Hybrid Classical-Quantum Deep Learning (HCQ-DL) models with Classical Deep Learning (C-DL) models to demonstrate robustness against adversarial attacks for perception modules. Before feeding them into the quantum system, we used transfer learning models like AlexNet and VGG-16 as feature extractors. We tested over 1000 quantum circuits in our HCQ-DL models for Projected Gradient Descent (PGD), Fast Gradient Sign Attack (FGSA), and Gradient Attack (GA), which are three well-known untargeted adversarial approaches. We evaluated the performance of all models during adversarial attack and no-attack scenarios. Our HCQ-DL models maintain accuracy above 95% during a no-attack scenario and above 91% for GA and FGSA attacks, which is higher than C-DL models. During the PGD attack, our AlexNet-based HCQ-DL model maintained an accuracy of 85% compared to C-DL models that achieved accuracies below 21%.",
        pdfLink: "pdf/Phd_paper3.pdf",
        githubLink: "https://github.com/reek129/QuantumAI_MultiClass_Sign_Recognition"
    }
};