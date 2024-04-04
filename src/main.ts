import { displayForm, loadComments, isFormCreated } from "./modules/displayForum";
import { Newuser, createUser, loginUser } from "./modules/login.ts";

document.addEventListener('DOMContentLoaded', async () => {
    let activeForumId: string | null = null;

    const forumIds = ['forum1', 'forum2', 'forum3'];

    for (const forumId of forumIds) {
        const forumButton = document.getElementById(forumId);
        if (forumButton) {
            forumButton.addEventListener('click', async () => {
                if (activeForumId === forumId) {
                    await loadComments(forumId);
                } else {
                    if (activeForumId && isFormCreated(activeForumId)) {
                        const previousForm = document.getElementById(`${activeForumId}Form`);
                        if (previousForm) {
                            previousForm.remove();
                        }
                    }
                    if (!isFormCreated(forumId)) {
                        await displayForm(forumId);
                    }
                    await loadComments(forumId);

                    activeForumId = forumId;
                }
            });
        }
    }
});

      const cr8UsrBtn = (document.getElementById('cr8UsrBtn') as HTMLInputElement); 

      cr8UsrBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const newName = (document.getElementById("cr8Name") as HTMLInputElement).value ;
        const newEmail = (document.getElementById("cr8Email") as HTMLInputElement).value ;
        const newPassword = (document.getElementById("cr8Psw") as HTMLInputElement).value ;

        createUser({ userName: `${newName}`, userEmail: `${newEmail}`, userPassword: `${newPassword}` })

        .then(() => {
        console.log("User created!")
        })
  
  });

        const loginBtn = (document.getElementById("loginBtn") as HTMLInputElement);
        loginBtn.addEventListener("click", (event) => {

            const loginWrap = (document.querySelector("#createUserPopup") as HTMLDivElement);
            if (loginBtn != null) {
            loginWrap.style.display = "flex";
        }
        })

        const loginLink = document.getElementById("loginLink") as HTMLAnchorElement;
        loginLink.addEventListener("click", (event) => {
            event.preventDefault();
            const loginPopup = (document.getElementById("loginPopup") as HTMLDivElement);
            const loginWrap = (document.querySelector("#createUserPopup") as HTMLDivElement);
            loginWrap.style.display = "none";
            loginPopup.style.display = "flex";
        })

        const closeBtn = (document.getElementById("closeBtn") as HTMLImageElement);
        closeBtn.addEventListener("click", (event) => {

            const loginWrap = (document.querySelector("#createUserPopup") as HTMLDivElement);
            
            loginWrap.style.display = "none";
        })

        const closeBtn2 = (document.getElementById("closeBtn2") as HTMLImageElement);
        closeBtn2.addEventListener("click", (event) => {

            const loginWrap = (document.querySelector("#loginPopup") as HTMLDivElement);
            
            loginWrap.style.display = "none";
        })

        const signInBtn = (document.getElementById("signInBtn") as HTMLInputElement);
        signInBtn.addEventListener("click", async (event) => {
            event.preventDefault();
            const email = (document.getElementById("loginEmail") as HTMLInputElement).value;
            const password = (document.getElementById("loginPassword") as HTMLInputElement).value;

            try {
                await loginUser(email, password);
              } catch (error) {
               console.log("Login failed!")
              }

        })