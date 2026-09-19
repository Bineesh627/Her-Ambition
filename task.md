Fix the responsive layout issues in the existing website, especially the Hero section, Membership/CTA section, and lower CTA sections shown in the attached screenshots.

IMPORTANT:
Do NOT redesign the website.
Do NOT change the existing desktop design, typography, colors, spacing style, imagery, content, or visual identity unnecessarily.

The current desktop design is already approved. Your job is ONLY to fix the responsive behavior.

PROBLEM:
When the browser is zoomed to 200%, the page behaves incorrectly. The section backgrounds remain full width, but the actual content becomes extremely narrow and gets concentrated in the center. In the Hero section, the hero image also remains positioned far to the right instead of reflowing naturally with the content.

The same issue appears in:
1. Hero section
2. Membership / Career CTA section
3. Community / Belong section
4. Testimonial / Progress section where applicable
5. Bottom CTA section

At 100% desktop zoom the current design should remain visually unchanged.

RESPONSIVE REQUIREMENTS:

1. HERO SECTION
- Preserve the current desktop appearance at 100% zoom.
- Fix the hero layout so it responds correctly when the viewport becomes narrow because of browser zoom.
- Do not allow the text/content to become trapped inside an unnecessarily narrow fixed-width container.
- The hero image must remain associated with the hero layout and must not get pushed to the far right outside the useful content area.
- Use responsive grid/flex behavior instead of relying on fixed desktop positioning.
- If the viewport becomes narrow, allow the hero text and image to stack naturally.
- Maintain appropriate spacing and readable typography.

2. MEMBERSHIP / CAREER CTA SECTION
- Preserve the current pink background and visual design.
- The content currently becomes a tiny centered block at 200% zoom.
- Make the inner content container responsive.
- Text, feature list, and CTA should reflow naturally.
- Avoid fixed widths that cause excessive empty horizontal space.
- On narrower widths, stack the columns instead of squeezing them.
- Keep the CTA button accessible and visible.

3. COMMUNITY / BELONG SECTION
- Preserve the existing image, text, button, and decorative elements.
- Make the layout responsive.
- At narrower widths, image and text should stack or resize naturally.
- Decorative elements must not force horizontal overflow.

4. TESTIMONIAL / CONTENT CARDS
- Make sure cards can resize or stack when the available width becomes smaller.
- Prevent cards from becoming unusably narrow.
- Maintain consistent gaps.
- Do not introduce horizontal page scrolling.

5. BOTTOM CTA
- Preserve the existing background image/design.
- Ensure the CTA content remains properly centered and readable at narrow widths.
- Prevent fixed positioning from causing content displacement.

TECHNICAL REQUIREMENTS:

Audit the existing CSS and component structure before making changes.

Look specifically for:
- fixed width containers
- min-width
- fixed pixel margins
- fixed left/right positioning
- absolute positioning
- transform-based positioning
- desktop-only grid definitions
- hardcoded column widths
- excessive max-width restrictions
- negative margins
- overflow rules
- elements positioned relative to the viewport instead of their section
- CSS that does not adapt when the effective viewport becomes narrow

Prefer:
- CSS Grid with responsive columns
- Flexbox where appropriate
- max-width with width: 100%
- responsive padding using clamp()
- minmax() for grids
- CSS media/container queries where appropriate
- natural document flow
- responsive image sizing
- relative positioning instead of unnecessary absolute positioning

Do NOT solve the problem by simply hiding content at smaller widths.

DO NOT:
- change the website content
- remove sections
- remove images
- change the branding
- change colors
- redesign the cards
- change the desktop layout unnecessarily
- add horizontal scrolling
- create a separate completely different mobile website

BREAKPOINT BEHAVIOR:

The website must work correctly at:

100% browser zoom
125% browser zoom
150% browser zoom
175% browser zoom
200% browser zoom

Also test using actual viewport sizes equivalent to:
- Desktop
- Tablet
- Mobile

IMPORTANT:
Browser zoom must be treated as a responsive constraint. At 200% zoom, the effective CSS viewport becomes much narrower, so the layout must reflow just like a smaller viewport.

EXPECTED RESULT:

At 100% desktop:
Keep the existing design essentially pixel-identical.

At 200% zoom:
- No major content should be pushed outside the viewport.
- No huge unexplained empty horizontal areas.
- Hero content and image should reflow naturally.
- Membership/CTA content should use the available width.
- Columns should stack when necessary.
- Text must remain readable.
- Buttons must remain visible and usable.
- No horizontal page overflow.
- No clipped content.
- No overlapping elements.

VALIDATION:

After implementing the fix:

1. Run the website.
2. Inspect the page at 100% zoom.
3. Confirm the desktop design has not been unnecessarily changed.
4. Test at 125%, 150%, 175%, and 200% browser zoom.
5. Test desktop, tablet, and mobile viewport widths.
6. Check document.scrollWidth against window.innerWidth and make sure there is no unintended horizontal overflow.
7. Inspect every major section, especially Hero, Membership/CTA, Community, Testimonials, and Bottom CTA.
8. Fix any remaining responsive issues you discover.

Use the existing project architecture and styling system. Make the smallest clean CSS/component changes necessary to solve the problem.

Do not stop after fixing only the Hero. Verify the entire page at 200% zoom before finishing.

Finally, provide a short summary of:
- What caused the responsive issue
- Which files/components were changed
- How the layout now behaves at 200% zoom
- Whether horizontal overflow remains