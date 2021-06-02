var hints = [{id: "b8b840systems5a-h1", type: "hint", dependencies: [], title: "Addition Method", text: "Adding these equations as presented will not eliminate a variable. However, we see that the first equation has 3x in it and the second equation has x. So, multiply the second equation by -3, the x-terms will add to zero.", variabilization: {}}, {id: "b8b840systems5a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["-3x+6y=-33"], dependencies: ["b8b840systems5a-h1"], title: "Multiplying Equations", text: "After you multiply the first equation by -3, what is the new equation?", variabilization: {}}, {id: "b8b840systems5a-h3", type: "hint", dependencies: ["b8b840systems5a-h2"], title: "Addition Method", text: "Now add the first and second equations.", variabilization: {}}, {id: "b8b840systems5a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["11y=-44"], dependencies: ["b8b840systems5a-h3"], title: "Addition Method", text: "What is the resulting equation when you add the first and second equation?", variabilization: {}}, {id: "b8b840systems5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-4"], dependencies: ["b8b840systems5a-h4"], title: "Isolating Variables", text: "What is y equal to?", variabilization: {}}, {id: "b8b840systems5a-h6", type: "hint", dependencies: ["b8b840systems5a-h5"], title: "Substitution", text: "Substitute $$y=-4$$ into one of the original equations and solve for x.", variabilization: {}}, {id: "b8b840systems5a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["b8b840systems5a-h6"], title: "Isolating Variables", text: "What is x equal to in $$\\left(3\\right) x+\\operatorname{5}\\left(\\left(-4\\right)\\right)=-11$$", variabilization: {}}, {id: "b8b840systems5a-h8", type: "hint", dependencies: ["b8b840systems5a-h7"], title: "Checking the Solution", text: "Our solution is the ordered pair (3,-4). Check the solution in the original second equation.", variabilization: {}}, {id: "b8b840systems5a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["11"], dependencies: ["b8b840systems5a-h8"], title: "Checking the Solution", text: "What does (3)-2(-4) equal?", variabilization: {}}, ]; export {hints};