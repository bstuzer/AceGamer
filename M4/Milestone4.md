# Milestone 4: Usability Testing - AceGamerApp

## Overview and Script
The goal is to evaluate usability of AceGamerApp web application from the point of view of gamers with different experience levels. Among the three users which will participate in our testing, we will have one of them classified as a "beginner"; the other two users will have some experience in terms of gaming but only one of them could be marked as an "expert" PC gamer. The first one will try to upgrade his current build beacuse of its low performances while running certain games, the other one hasn't been playing in many years, so he created a build by himself but he isn't sure if it should be good enough to play the game that was released recently, which requires high performances.

Due to some organization problems, tests will be conducted on Teams in order to avoid meeting in person. The way we will let participants use our application is very simple: we organized a call where they can control our PCs remotely trying to complete some tasks. During the whole call they will turn on their webcams and microphones so that we can observe their reactions. At the end of the session, a post-test questionaire will be conducted.

The objectives for our usability testing are to understand user's ability to:
+ Create a new build from scratch
+ Update an already existing build
+ Manual insertion of a build to check for upgrades

How the tests were conducted, along with the session script can be read in more detail here on our [usability testing protocol document](https://github.com/polito-hci-2021/AceGamerApp/blob/main/additionalFiles/usabilityTestingProtocol.md).

## Results and List of Changes
Here we report our findings, the comments we made during usability testing and our impressions from debriefs with participants at the end of the session. After that we analyzed the time spent on the desired task, the way those were performed and the results of the post-test questionnaire. Finally, we illustrated the list of possible changes.

# Results
We started with Luca. His objective was to create a new configuration for playing a game and the entire process went smoothly beacuse, in our opinion, the number of interactions with the application to achieve this task was minimal. However after the results where he reached the summary page, he was not sure on how to proceed since being an unexperienced user he didn't have the knowledge to assemble the PC itself, so he suggested us to insert something like a tutorial to meet his demands.

The second one was Eleonora who was considered as one of the "expert" users. She aimed to upgrade her PC by performing the "autodetection" process. Starting from the fact that she is aware of the entire gaming hardware world, she had no faults on reaching the expected results by selecting the component she preferred; she found useful the fact that there was a summary page on which was provided a link to take a look at the selected component on a web store.

The last user was Francesco that influenced us to perform some changes. First he tried to insert a build manually, but that option was only provided once autodetection failed. So, he had to fail the autodetection process to get to the desired page. Then we noticed also that he had to go back and forth several times during manual selection because he was not sure of which components he has selected so far. When he reached the end of the task, he was pleased that his build resulted to be good enough for the game he wanted to play.

# Evaluation findings
The first important thing about the evaluation is that everybody was able to finish each task. We recorded the time spent to finish it for each user. Another important fact is that, the times are proportional to the level of experience each user has.

|  Tester  | Task #1 | Task #2 | Task #3 |
|:---------:|---------|---------|---------|
| Luca      |   19s   |   20s   |   30s   |
| Eleonora  |   12s   |   13s   |  1m29s  |
| Francesco |    9s   |   14s   |  1m53s  |

For what concern the first task, we were able to notice that the expert users completed it faster than the unexpert one. This is due to the fact that Luca was looking for some information on how to proceed with the build, so he spent some time on that.
The other two short times come from the fact that the experienced users were immediately able to understand results from the new configuration page.

We could also notice an incredibly greater amount of time spent on performing the third task by experienced users. The reason why was that they were choosing the components based on their knowledge, so they focused a lot on trying to not fail manual selection insted of Luca, the beginner user, which randomly selected components due to his lack of experience with hardware: he wasn't able to understand the meanings of the selections but he understood the results in summary page divided by "Picked components" and "Current components" sections.

SUS scores are showed below
|   Tester  | Score |
|:---------:|-------|
| Luca      |  47,5 |
| Eleonora  |  87,5 |
| Francesco |   75  |

The average score is 70. This result represents a good starting point since it is considered an above average result (68). But in each case, it shows also some lacking points in different parts of the application.

In all questions the gap is significant between the experienced, the moderately experienced and the beginner user. This made us reflect on the fact that even if our application was initially aimed to help unexpert users, we should spend much more effort on enhancing the experience of this group of users.

# List of potential changes
Here, there are the possible changes we would link to implement to make our application bettter:

+ Insert a tutorial (maybe a Youtube video) that explains step by step how to build a gaming PC after getting each component.
+ Add a sort of "Info Page" that explains better which are each component's functionalities along with the workflow of the web application in order to better explain how the pages are linked and so on.
+ To help the users remember what they've selected so far, for manual selection of components of the user's current build, a "Selected Components" column on the side that allows the user to have a brief overview of the previously selected component(s), so in each phase the users know if they have selected the correct components without having to go back to verify. 
+ We got to the conclusion that the application must directly differenciate between "auto" or "manual" processes once user has to choose if he or she wants to create a new build or update an already existing one. This might avoid behaviours like that one of Francesco and allow users to immediately reach their purpose by selecting a simple button.

All those changes will be included in the final version of the application.
