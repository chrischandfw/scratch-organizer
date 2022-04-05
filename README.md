## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

## Description
- We will be creating a Workshop Organizer. This app allows you to add participants to workshops.

## Acceptance Criteria
- Users should be able to see a list of workshops with participants on /workshops
- Clicking on a participant should delete it from supabase and rerender the list of workshops
- The /create page should have a filled dropdown menu with the list of workshops from supabase
- Submitting the form on the /create page should create a new participant in the workshop and redirect the user back to the /workshops page

## Rubric
- Main branch deployed to Netlify	
- Open PR from dev branch with Netlify deploy preview	
- Supabase tables properly setup (submit a screenshot with your submission)	
- Supabase policies properly setup (submit a screenshot with your submission)	
- User sees a list of workshops on /workshops	
- User sees a dropdown of workshops on /create	
- User can add a participant to a workshop	
- User can remove a participant from a workshop	
- ASYNC: getWorkshops() : get all workshops with their participants in supabase.	
- ASYNC: createParticipant(participant) : create participant in supabase and attach it to a workshop	
- ASYNC: deleteParticipant(id) : delete a participant in supabase	