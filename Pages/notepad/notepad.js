import { annotate, annotationGroup } from 'rough-notation';


const notepad = () => {

// I also want to add a feature that allows them to add a comment to the highlighted, underlined, or circled text. 
// The comment will be visible when they hover over the highlighted, underlined, or circled text.

//Below I've used Rough Notation library code to circle the selected text

// 1. Select your target elements
const eHighlight = document.querySelector('#hl');
const eCircle = document.querySelector('#circ');
const eUnderline = document.querySelector('#ul');
const eBracket = document.querySelector('#bracket');
const eMultiline = document.querySelector('#multiline');

// 2. Create individual annotations with desired properties
const a1 = annotate(eHighlight, { type: 'highlight', color: 'yellow' });
const a2 = annotate(eCircle, { type: 'circle', color: 'red' });
const a3 = annotate(eUnderline, { type: 'underline', color: 'blue' });
const a4 = annotate(eBracket, { type: 'brackets', color: 'green', brackets: ['left', 'right'] });

// 3. For multi-line features, ensure 'multiline' is set to true
const a5 = annotate(eMultiline, { type: 'highlight', color: 'pink', multiline: true });

// 4. Combine them into a group
const ag = annotationGroup([a1, a2, a3, a4, a5]);

// 5. Show them all together (they will animate in order)
ag.show();


// Example comment database schema or state array
//This is the data model needed to store comments associated with specific highlighted, underlined, or circled text. 
// Each comment has a unique ID, the ID of the HTML element it is associated with, the comment text, and a timestamp for when the comment was made. 
// This structure allows for easy retrieval and display of comments when users interact with the annotated text.
const comments = [
  {
    id: "comment-101",
    elementId: "note-paragraph-1", // Maps to the HTML element ID
    text: "This is a critical point to remember.",
    timestamp: "2026-09-01T14:15:00Z"
  }
];


const activeNotations = {};

document.querySelectorAll('.notatable').forEach(element => {
  element.addEventListener('click', (e) => {
    const elementId = e.target.id;

    // 1. Visual Notation
    if (!activeNotations[elementId]) {
      const annotation = annotate(e.target, { type: 'underline', color: 'yellow' });
      annotation.show();
      activeNotations[elementId] = annotation; // Save instance
    }

    // 2. Open Comment Form
    openCommentModal(elementId);
  });
});

function openCommentModal(elementId) {
  // Reveal your custom UI modal/popover
  const modal = document.getElementById('comment-modal');
  modal.style.display = 'block';
  
  // Attach the target element ID to the modal submit button
  document.getElementById('save-comment-btn').dataset.targetId = elementId;
}

document.getElementById('save-comment-btn').addEventListener('click', (e) => {
  const targetId = e.target.dataset.targetId;
  const commentText = document.getElementById('comment-input').value;

  // Save to your state/database
  const newComment = {
    id: Date.now().toString(),
    elementId: targetId,
    text: commentText
  };
  
  saveCommentToDatabase(newComment); // Your backend or localStorage logic
  renderCommentSidebar();            // Refresh UI sidebar
  
  // Close modal
  document.getElementById('comment-modal').style.display = 'none';
  document.getElementById('comment-input').value = '';
});

    return (
    <div className="notepad">
      <h2>Notepad</h2>
      <div className="notepad__container">
        <textarea placeholder="Write your notes here..."></textarea>
      </div>
    </div>
  )
}

export default notepad