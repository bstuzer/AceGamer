# AceGamerApp - Usability Testing Protocol and Script 

## User profile
We are planning to recruit participants with the following features:
- No limitations with age, gender or educational background
- Interested in playing PC games
- Interested in building a gaming PC
- They have a good amount of experience or knowledge in hardware 
- They have no experience or knowledge in hardware

## Methodology
### Number of participants
We are planning to have three participants that have diverse backgrounds in terms of experience in hardware:
- One beginner user who has no knowledge of hardware or experience in hardware replacement 
- One user who has a little amount of experience and knowledge in the field
- A user who is an expert in the field who can do research for the components he needs, and then can replace the components himself 

### Length of the session
Each session will be about 25 minutes. The session will include:
- Welcome and test explanation: 5 minutes 
- Task scenarios: 8 minutes  
- Quick debriefing about the test: 4 minutes
- Post-test questionnaire: 8 minutes

### Recording of observations
The facilitator will be recording the shared screen by taking screenshots while the other members will be taking notes of the important details they notice while examining.

### Test artifacts
- Facilitator script
- [Consent form](https://github.com/polito-hci-2021/AceGamerApp/blob/main/additionalFiles/PostTestQuestionnaire.docx)
- [Post-test questionnaire (SUS)](https://github.com/polito-hci-2021/AceGamerApp/blob/main/additionalFiles/informedConsentForm.docx)

## Equipment
During the test carried out remotely the following equipment will be used both by the team and the participants:
- Computer with access to internet
- Microphone and webcam to connect with the team

And exclusively for our team:
- The software to record the call
- A timer 
- A pen and paper that will help them take notes

## Requirements

The testing will be taking place in a remote environment, therefore to make sure the environment will be simulating the natural conditions of usage as smoothly as possible, the facilitator will be sharing his screen and giving the participants the possibility to control the mouse and the keyboard to use our web application. 

## Tasks

| # | Text of the task | Success criteria| Methodology |
| --- | ----------- | --- | --- |
|T1|Create a new build from scratch|To be able to reach the summary page by selecting one of the combinations the application will offer them, the participant must be able to make the selection that suits his/her preference the best.| Think-aloud |
|T2|Upgrade an already existing build|The user must reach the suggestions page by going through the autodetection path and select one of the suggested components for each component his/her PC is having insufficient performance with.| Think-aloud|
|T3|Use manual insertion of a build to check for upgrades|In case of an autodetection failure, the user must be able to complete the manual selection of his/her components accurately enough for the application to provide the best recommendations that suit his/her existing build.| Think-aloud |

### Metrics
- Time spent on task
- Number of users that are able to complete the task effortlessly
- Post-test questionnaire (SUS)

## Script
> **Introduction**
>> Hello, "*name of the participant*". I am "*name of the facilitator*", first of all I'd like to thank you for joining us today and installing the software required to test our application. If we didn't have you, we would never be able to make our application great.

> **State the purpose of the study**
>> We know your time is valuable, therefore we decided to make our test as concise as possible, so we included only several tasks for you to complete. Hopefully you'll be enjoying the flow of our application.

>> We are here today to perform a usability test on a web application named AceGamerApp that will hopefully help a number of people to find what kind of hardware they need to acquire in order to play a game of their choice. In the next minutes, we will be examining how you'll perceive this web application. During this test, we would like you to complete a series of tasks that match goals typical users including you might have when using this website. We are interested in knowing how you do things and why you did them. 

> **Describe thinking out loud**
>> For our little amount of tasks designated for our test today, we would like you to "think aloud" while you are trying to complete each task. We prioritise your verbal expressions and thoughts while doing such tasks because those tasks can also be done by not spending time to understand them, and make random selections instead. We will be taking notes in order for us to understand better why and how you accomplish the tasks, so hearing from you is vital. 

> **Provide the forms required for participation**
>> Before we start, we would like to send you the consent form that lets us examine and document your behavior throughout the session. We are sending you the document through the chat, feel free to take some time to read and sign it digitally. After you return the signed document back to us, we can proceed with the test. 

> **Explain the testing process**
>> The testing will be conducted by us giving you three simple tasks that recover the most important actions the users will be taking on our application to reach their goals. We will be giving you access to control the computer you are watching the screen of at the moment, where you will be able to control the mouse and the keyboard of just like you are using your own computer.
>> Outside the tasks, please feel free to explore the website further and use the same think-aloud technique to express how you feel about the section you are on.
>> While you are testing our website, we will be examining and documenting your behavior by watching the screen and you.

> **Ask the participant to share any questions or concerns**
>> Before we start the test, do you have any questions or concerns?

> **Start the study**
>> Let's add up some story for you to play in. Please feel free to ask questions in case there is something unclear. 
>>> There's a new game that is going to be released soon called "F1 Manager 22" and you realised that your current PC will not be able to run it smoothly. You select or type the game on the front page of our application.
>>> 1. On the next page you select "New PC" because you think your current computer is too old to be upgraded. 
>>> 2. After realising that the total price would be too high for you if you'd go with building a new PC from scratch, no matter if you went with the cheaper option or not, you decide to use auto-detect on your computer just in case your current components can already be sufficient enough for this game.
>>> 3. After the autodetection, you notice that you'll have to change every component you own. You want to try autodetection again in case there could've been an error. However, this time the autodetection fails and you are redirected to the manual selection page where you are expected to select the components your current PC has.

> Thank you so much for helping us by taking this test. Have you found our application usable? Was it easy to understand, and were you able to find your way through easily? How about the usage of colors, and the design? Would you like to use it in the future for other games? Is there anything you would like to change?

> Now the only thing left for you to do is to fill the questionnaire we'll be sending you in the chat. Please take your time to give the best answers that will suit your experience and send it back to us once you are finished. Without your feedback, our application wouldn't be complete. Thank you again for your participation.

## Post-test questionnaire (SUS)
The post-test questionnaire, sent to users, will consist of the following ten points.
Each statement has 5 points that vary from "Strongly disagree" to "Strongly agree".
1. I think that I would like to use this system frequently.
2. I found the system unnecessarily complex.
3. I thought the system was easy to use.
4. I think that I would need the support of a technical person to be able to use this system.
5. I found the various functions in this system were well integrated.
6. I thought there was too much inconsistency in this system.
7. I would imagine that most people would learn to use this system very quickly.
8. I found the system very cumbersome to use.
9. I felt very confident using the system.
10. I needed to learn a lot of things before I could get going with this system.
