Use the following html and css for reference and apply to card-lg
always double check with variables and apply variables for styles, spacing, radius, colors, text.

HTML Code:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Large Component</title>
  <link rel="stylesheet" href="card-lg.css">
</head>
<body>
  <!-- Card Large - Default State -->
  <div class="card-lg">
    <span class="card-lg__category">Technology</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Title</h2>
        <p class="card-lg__description">text</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">button</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Illustration Image -->
    <div class="card-lg__illustration">
      <img src="illustration-tech.png" alt="Network Illustration" class="card-lg__illustration-img">
    </div>
  </div>

  <!-- Card Large - Hover State -->
  <div class="card-lg card-lg--hover">
    <span class="card-lg__category">Technology</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Title</h2>
        <p class="card-lg__description">text</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">button</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Illustration Image -->
    <div class="card-lg__illustration">
      <img src="illustration-tech.png" alt="Network Illustration" class="card-lg__illustration-img">
    </div>
  </div>

  <!-- Example with different content -->
  <div class="card-lg">
    <span class="card-lg__category">Security</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Decentralized Network</h2>
        <p class="card-lg__description">Built on blockchain technology for maximum security and privacy</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">Learn More</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <div class="card-lg__illustration">
      <img src="illustration-tech.png" alt="Network Illustration" class="card-lg__illustration-img">
    </div>
  </div>
</body>
</html>

CSS:
/* Base Card Large Styles */
.card-lg {
  background: linear-gradient(to right, #f9fafb, #f9fafb);
  border: 1px solid #a1a1aa;
  display: flex;
  flex-direction: column;
  gap: 80px;
  height: 395px;
  padding: 24px;
  border-radius: 32px;
  width: 629px;
  overflow: hidden;
  position: relative;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

/* Hover State */
.card-lg--hover,
.card-lg:hover {
  background: linear-gradient(to right, #e5e7eb, #e5e7eb);
}

/* Category Label */
.card-lg__category {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #ad4fc4;
  flex-shrink: 0;
  z-index: 2;
  position: relative;
}

/* Content Container */
.card-lg__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  width: 387px;
  padding-bottom: 24px;
  min-height: 0;
  flex-shrink: 0;
  z-index: 2;
  position: relative;
}

/* Text Section */
.card-lg__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  white-space: pre-wrap;
  flex-shrink: 0;
}

/* Title */
.card-lg__title {
  font-family: 'Sora', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -1px;
  color: #04070b;
  margin: 0;
  width: 100%;
}

/* Description */
.card-lg__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #172330;
  margin: 0;
  width: 100%;
}

/* Button */
.card-lg__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 4px;
  border-radius: 16px;
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.2s ease;
}

.card-lg__button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.card-lg__button-text {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #04070b;
  padding: 0 8px;
  transition: color 0.2s ease;
}

.card-lg--hover .card-lg__button-text,
.card-lg:hover .card-lg__button-text {
  color: #003d7a;
}

.card-lg__button-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: #04070b;
  transition: all 0.2s ease;
}

.card-lg--hover .card-lg__button-icon,
.card-lg:hover .card-lg__button-icon {
  color: #003d7a;
}

.card-lg__button:hover .card-lg__button-icon {
  transform: translateX(4px);
}

/* Illustration Container */
.card-lg__illustration {
  position: absolute;
  right: -75px;
  top: 50%;
  transform: translateY(-50%);
  width: 262px;
  height: 262px;
  overflow: visible;
  pointer-events: none;
  z-index: 1;
}

/* Illustration Image */
.card-lg__illustration-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  pointer-events: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-lg {
    width: 100%;
    max-width: 629px;
    height: auto;
    min-height: 395px;
  }
  
  .card-lg__content {
    width: 100%;
    max-width: 387px;
  }
  
  .card-lg__illustration {
    right: -100px;
    opacity: 0.5;
  }
}

@media (max-width: 480px) {
  .card-lg {
    gap: 40px;
  }
  
  .card-lg__illustration {
    right: -120px;
    opacity: 0.3;
    width: 200px;
    height: 200px;
  }
}

/* Dark theme variant (optional) */
.card-lg--dark {
  background: linear-gradient(to right, #0e1820, #0e1820);
  border-color: #3f3f46;
}

.card-lg--dark:hover,
.card-lg--dark.card-lg--hover {
  background: linear-gradient(to right, #172330, #172330);
}

.card-lg--dark .card-lg__title {
  color: #fafafa;
}

.card-lg--dark .card-lg__description {
  color: #d4d4d8;
}

.card-lg--dark .card-lg__button-text,
.card-lg--dark .card-lg__button-icon {
  color: #fafafa;
}

.card-lg--dark:hover .card-lg__button-text,
.card-lg--dark.card-lg--hover .card-lg__button-text,
.card-lg--dark:hover .card-lg__button-icon,
.card-lg--dark.card-lg--hover .card-lg__button-icon {
  color: #60a5fa;
}

/* Grid layout helper (for multiple cards) */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(629px, 1fr));
  gap: 24px;
  padding: 24px;
}

@media (max-width: 680px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}

USAGE:
1. Basic Card with PNG Illustration:
<div class="card-lg">
  <span class="card-lg__category">Technology</span>
  <div class="card-lg__content">
    <div class="card-lg__text">
      <h2 class="card-lg__title">Decentralized Network</h2>
      <p class="card-lg__description">Built on blockchain technology for maximum security and privacy.</p>
    </div>
    <button class="card-lg__button">
      <span class="card-lg__button-text">Learn More</span>
      <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
  <div class="card-lg__illustration">
    <img src="your-illustration.png" alt="Illustration" class="card-lg__illustration-img">
  </div>
</div>

ChatsProjectsArtifactsRecentsHideCreating Figma component codeBuilding Spixi app directory webpageContinuing previous workResponsive page with design tokensImplement Spixi website designConverting Figma design to websiteDdamirPro planCreating Figma component codeDhey bro, I will give you a link to figma, so you can create a new component code, which I will paste in claude code to add to my project. Is that ok?Hey! Yeah, that sounds great! I can help you generate code from a Figma design. Just share the Figma link with me and I'll:

Extract the design from Figma
Generate the component code for you
Make sure it's ready to drop into your project via Claude Code

Go ahead and paste the link whenever you're ready. If you can also let me know what framework/language you're using (React, Vue, plain HTML/CSS, etc.), that'll help me generate the most appropriate code for your project!Dchecking all props and variants - create me a copy/paste code for claude code
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=244-1029&m=devI'll fetch the Figma design and generate the code for you.Get design contextRequest{
  `nodeId`: `244:1029`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `unknown`,
  `clientFrameworks`: `unknown`
}Responsetype ChipProps = {
  text?: string;
  state?: "selected" | "default";
};

export default function Chip({ text = "Label", state = "selected" }: ChipProps) {
  const isDefault = state === "default";
  const isSelected = state === "selected";
  return (
    <div id={isSelected ? "node-244_1030" : isDefault ? "node-244_1032" : ""} className={`content-stretch flex items-center justify-center overflow-clip px-[var(--spacing\/sm,12px)] py-[var(--spacing\/xxs,4px)] relative rounded-[30px] ${isSelected ? "bg-[var(--colors\/surface\/accent,#c987d9)]" : isDefault ? "border border-[var(--colors\/outline\/03,#3f3f46)] border-solid" : ""}`}>
      {isSelected && (
        <div className="flex flex-col font-[family-name:var(--label\/sm\/font-family,'Inter:semibold',sans-serif)] font-[var(--label\/sm\/font-weight,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--colors\/text\/inverse-01,#04070b)] text-[length:var(--label\/sm\/font-size,14px)] text-center tracking-[var(--tracking\/global\/label-sm,-0.5px)] whitespace-nowrap" data-node-id="244:1031">
          <p className="leading-[var(--label\/sm\/line-height,20px)]">{text}</p>
        </div>
      )}
      {isDefault && (
        <div className="flex flex-col font-[family-name:var(--label\/sm\/font-family,'Inter:semibold',sans-serif)] font-[var(--label\/sm\/font-weight,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--colors\/text\/02,#d4d4d8)] text-[length:var(--label\/sm\/font-size,14px)] text-center tracking-[var(--tracking\/global\/label-sm,-0.5px)] whitespace-nowrap" data-node-id="244:1033">
          <p className="leading-[var(--label\/sm\/line-height,20px)]">{text}</p>
        </div>
      )}
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/label/sm: Font(family: "label/sm/font-family", style: label/sm/font-weight, size: label/sm/font-size, weight: 600, lineHeight: label/sm/line-height, letterSpacing: tracking/global/label-sm).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `244:1029`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `unknown`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a Chip component with two states: selected (purple/accent background) and default (with border outline).
Here's the clean, copy-paste ready React + Tailwind component code for you:
tsxtype ChipProps = {
  text?: string;
  state?: "selected" | "default";
};

export default function Chip({ text = "Label", state = "selected" }: ChipProps) {
  const isDefault = state === "default";
  const isSelected = state === "selected";
  
  return (
    <div 
      className={`
        inline-flex items-center justify-center 
        px-3 py-1 
        rounded-full
        ${isSelected ? "bg-[#c987d9]" : ""}
        ${isDefault ? "border border-[#3f3f46]" : ""}
      `}
    >
      <span 
        className={`
          text-sm font-semibold 
          tracking-tight
          whitespace-nowrap
          ${isSelected ? "text-[#04070b]" : "text-[#d4d4d8]"}
        `}
      >
        {text}
      </span>
    </div>
  );
}
Usage:
tsx// Selected state (purple background)
<Chip text="Label" state="selected" />

// Default state (outlined)
<Chip text="Label" state="default" />
The component has:

✅ Two variants: selected and default
✅ Dynamic text prop
✅ Proper styling with appropriate colors from your design system
✅ Clean, minimal Tailwind classes
✅ TypeScript types included

Just paste this into your Claude Code project and you're good to go! Let me know if you need any adjustments.DI need HTML CSS codeGot it! Here's the HTML + CSS version for you:
chip.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chip Component</title>
  <link rel="stylesheet" href="chip.css">
</head>
<body>
  <!-- Selected state -->
  <div class="chip chip--selected">
    <span class="chip__text">Label</span>
  </div>

  <!-- Default state -->
  <div class="chip chip--default">
    <span class="chip__text">Label</span>
  </div>
</body>
</html>
chip.css
css.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 30px;
  overflow: hidden;
}

.chip--selected {
  background-color: #c987d9;
}

.chip--default {
  border: 1px solid #3f3f46;
  background-color: transparent;
}

.chip__text {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  white-space: nowrap;
  text-align: center;
}

.chip--selected .chip__text {
  color: #04070b;
}

.chip--default .chip__text {
  color: #d4d4d8;
}
Usage:
html<!-- Selected chip -->
<div class="chip chip--selected">
  <span class="chip__text">Your Text</span>
</div>

<!-- Default chip -->
<div class="chip chip--default">
  <span class="chip__text">Your Text</span>
</div>
Note: Make sure to include the Inter font in your project. You can add this to the <head> of your HTML:
html<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet">
This is clean, semantic HTML/CSS that you can drop right into your project!DDo the same for this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=242-2035&m=devGet design contextRequest{
  `nodeId`: `242:2035`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst imgAppImage = "https://www.figma.com/api/mcp/asset/da7fb9a4-b6ba-406f-a62e-2def7c509dc6";
const imgIcon = "https://www.figma.com/api/mcp/asset/ab6a49e4-5868-4996-a0ef-7ea3dbed6077";
const imgQrCode = "https://www.figma.com/api/mcp/asset/39152c77-d4db-4d69-ac0a-30cad888db22";
type CopySimpleProps = {
  className?: string;
  type?: "light";
};

function CopySimple({ className, type = "light" }: CopySimpleProps) {
  return (
    <div data-node-id="196:1914" className={className}>
      <div data-node-id="196:1909" className="absolute inset-[13.28%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" alt="" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}
type ModalProps = {
  property1?: "desktop" | "mobile";
};

export default function Modal({ property1 = "desktop" }: ModalProps) {
  const isDesktop = property1 === "desktop";
  const isMobile = property1 === "mobile";
  return (
    <div id={isDesktop ? "node-242_2033" : isMobile ? "node-242_2034" : ""} className={`bg-[var(--colors\/surface\/01,#04070b)] content-stretch flex flex-col items-center p-[var(--spacing\/none,0px)] relative rounded-[var(--corner-radius\/xxl,32px)] ${isDesktop ? "gap-[var(--spacing\/xl,24px)] w-[760px]" : isMobile ? "gap-[var(--spacing\/none,0px)]" : ""}`}>
      {isDesktop && (
        <div data-node-id="238:1203" className="content-stretch flex gap-[var(--spacing\\/xl,24px)] items-center p-[var(--spacing\\/xl,24px)] relative rounded-tl-[var(--corner-radius\\/lg\\+,20px)] rounded-tr-[var(--corner-radius\\/lg\\+,20px)] shrink-0 w-full" data-name="row">
          <div data-node-id="238:1204" className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="img">
            <div data-node-id="238:1205" className="border border-[var(--colors\\/outline\\/03,#3f3f46)] border-solid relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 size-[96px]" data-name="app-image">
              <img className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" alt="" src={imgAppImage} />
            </div>
          </div>
          <div data-node-id="238:1206" className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\\/xs,8px)] items-start min-h-px min-w-px relative shrink-0" data-name="details">
            <div data-node-id="238:1207" className="content-stretch flex flex-col gap-[var(--spacing\\/xxs,4px)] items-start relative shrink-0 w-full" data-name="meta">
              <div data-node-id="238:1208" className="content-stretch flex gap-[var(--spacing\\/sm,12px)] items-center relative shrink-0 w-full" data-name="row">
                <p data-node-id="238:1209" className={`font-[family-name:var(--heading\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--heading\\/sm\\/font-weight,normal)] leading-[var(--heading\\/sm\\/line-height,28px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#fafafa)] text-[length:var(--heading\\/sm\\/font-size,20px)] tracking-[var(--tracking\\/heading\\/heading-sm,-0.5px)]`}>
                  Title
                </p>
                <div data-node-id="238:1210" className="bg-[var(--colors\\/surface\\/04,#172330)] content-stretch flex items-start px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/sm,8px)] shrink-0" data-name="badge">
                  <p data-node-id="I238:1210;151:1957" className={`font-[family-name:var(--label\\/xs\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/xs\\/font-weight,normal)] leading-[var(--label\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/xs\\/font-size,12px)] text-center tracking-[var(--tracking\\/global\\/label-xs,-0.5px)]`}>
                    Category
                  </p>
                </div>
              </div>
              <p data-node-id="238:1211" className={`font-[family-name:var(--body\\/xs\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/xs\\/font-weight,normal)] leading-[var(--body\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--body\\/xs\\/font-size,12px)] tracking-[var(--tracking\\/global\\/body-xs,0px)]`}>
                Publisher
              </p>
            </div>
            <p data-node-id="238:1212" className={`font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#fafafa)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] w-full whitespace-pre-wrap`}>
              Description
            </p>
          </div>
        </div>
      )}
      <div id={isDesktop ? "node-238_1217" : isMobile ? "node-238_1256" : ""} className={`content-stretch flex flex-col gap-[var(--spacing\/xl,0px)] items-start justify-center py-0 relative shrink-0 ${isDesktop ? "px-[var(--spacing\/xl,24px)] w-full" : isMobile ? "px-[var(--spacing\/md,16px)] w-[328px]" : ""}`} data-name="content">
        {isDesktop && (
          <div data-node-id="238:1219" className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="container">
            <div data-node-id="238:1220" className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\\/md,16px)] items-start min-h-px min-w-px p-[var(--spacing\\/md,16px)] relative rounded-[24px] self-stretch shrink-0" data-name="left">
              <p data-node-id="238:1221" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Add Manually
              </p>
              <ol data-node-id="238:1222" className={`block font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[0] list-decimal relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] whitespace-nowrap whitespace-pre-wrap`} start="1">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">Copy the App URL</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">In Spixi, go to Apps → + Add Mini App</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">Paste the link and tap Get from URL</span>
                </li>
              </ol>
              <div data-node-id="238:1223" className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="address">
                <p data-node-id="238:1224" className={`font-[family-name:var(--label\\/xs\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/xs\\/font-weight,normal)] leading-[var(--label\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/xs\\/font-size,12px)] tracking-[var(--tracking\\/global\\/label-xs,-0.5px)]`}>
                  App URL
                </p>
                <div data-node-id="238:1225" className="bg-[var(--colors\\/surface\\/04,#172330)] content-stretch flex items-center justify-between p-[var(--spacing\\/sm,12px)] relative rounded-[var(--corner-radius\\/md,12px)] shrink-0 w-full" data-name="container">
                  <p data-node-id="238:1226" className={`flex-[1_0_0] font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] min-h-px min-w-px relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] whitespace-pre-wrap`}>
                    URL-address
                  </p>
                  <CopySimple className="overflow-clip relative shrink-0 size-[24px]" />
                </div>
              </div>
            </div>
            <div data-node-id="238:1228" className="bg-[var(--colors\\/surface\\/03,#0e1820)] content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\\/md,16px)] items-center justify-center min-h-px min-w-px p-[var(--spacing\\/md,16px)] relative rounded-[24px] shrink-0" data-name="right">
              <div data-node-id="238:1229" className="h-[164px] relative shrink-0 w-[166px]" data-name="QR Code">
                <img className="block max-w-none size-full" alt="" src={imgQrCode} />
              </div>
              <p data-node-id="238:1231" className={`font-[family-name:var(--label\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/sm\\/font-weight,normal)] leading-[var(--label\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--label\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/label-sm,-0.5px)]`}>
                Scan with Spixi
              </p>
              <p data-node-id="238:1232" className={`font-[family-name:var(--body\\/xs\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/xs\\/font-weight,normal)] leading-[var(--body\\/xs\\/line-height,16px)] min-w-full relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--body\\/xs\\/font-size,12px)] text-center tracking-[var(--tracking\\/global\\/body-xs,0px)] w-[min-content] whitespace-pre-wrap`}>
                *Open this mini app on another device.
              </p>
            </div>
          </div>
        )}
        {isMobile && (
          <div data-node-id="238:1258" className="content-stretch flex flex-col gap-[var(--spacing\\/xs,8px)] items-center relative shrink-0 w-full">
            <div data-node-id="238:1296" className="content-stretch flex flex-col gap-[var(--spacing\\/md,16px)] items-start px-[var(--spacing\\/none,0px)] py-[var(--spacing\\/md,16px)] relative rounded-[24px] shrink-0 w-full" data-name="left">
              <p data-node-id="238:1297" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Add Manually
              </p>
              <ol data-node-id="238:1298" className={`block font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[0] list-decimal relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] whitespace-nowrap whitespace-pre-wrap`} start="1">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">Copy the App URL</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">In Spixi, go to Apps → + Add Mini App</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">Paste the link and tap Get from URL</span>
                </li>
              </ol>
              <div data-node-id="238:1299" className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="address">
                <p data-node-id="238:1300" className={`font-[family-name:var(--label\\/xs\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/xs\\/font-weight,normal)] leading-[var(--label\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/xs\\/font-size,12px)] tracking-[var(--tracking\\/global\\/label-xs,-0.5px)]`}>
                  App URL
                </p>
                <div data-node-id="238:1301" className="bg-[var(--colors\\/surface\\/04,#172330)] content-stretch flex items-center justify-between p-[var(--spacing\\/sm,12px)] relative rounded-[var(--corner-radius\\/md,12px)] shrink-0 w-full" data-name="container">
                  <p data-node-id="238:1302" className={`flex-[1_0_0] font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] min-h-px min-w-px relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] whitespace-pre-wrap`}>
                    URL-address
                  </p>
                  <CopySimple className="overflow-clip relative shrink-0 size-[24px]" />
                </div>
              </div>
            </div>
            <div data-node-id="238:1281" className="bg-[var(--colors\\/surface\\/03,#0e1820)] content-stretch flex flex-col gap-[var(--spacing\\/md,16px)] items-center justify-center p-[var(--spacing\\/md,16px)] relative rounded-[24px] shrink-0 w-full" data-name="right">
              <p data-node-id="238:1284" className={`font-[family-name:var(--label\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/sm\\/font-weight,normal)] leading-[var(--label\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--label\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/label-sm,-0.5px)]`}>
                Or scan with Spixi
              </p>
              <div data-node-id="238:1282" className="h-[164px] relative shrink-0 w-[166px]" data-name="QR Code">
                <img className="block max-w-none size-full" alt="" src={imgQrCode} />
              </div>
              <p data-node-id="238:1285" className={`font-[family-name:var(--body\\/xs\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/xs\\/font-weight,normal)] leading-[var(--body\\/xs\\/line-height,16px)] min-w-full relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--body\\/xs\\/font-size,12px)] text-center tracking-[var(--tracking\\/global\\/body-xs,0px)] w-[min-content] whitespace-pre-wrap`}>
                *Open this mini app on another device.
              </p>
            </div>
          </div>
        )}
      </div>
      <div id={isDesktop ? "node-238_1306" : isMobile ? "node-238_1331" : ""} className="content-stretch flex flex-col h-[80px] items-center justify-between p-[var(--spacing\\/md,16px)] relative shrink-0 w-full" data-name="container">
        <div id={isDesktop ? "node-238_1307" : isMobile ? "node-238_1332" : ""} className={isDesktop ? "border-[var(--colors\\/outline\\/action-secondary\\/default,#f9fafb)] border-[var(--outline-width\\/md,2px)] border-solid content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center min-w-[128px] px-[var(--spacing\\/md,16px)] py-[var(--spacing\\/sm,12px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" : isMobile ? "border-[var(--colors\\/outline\\/action-secondary\\/default,#f9fafb)] border-[var(--outline-width\\/md,2px)] border-solid content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center min-w-[128px] px-[var(--spacing\\/md,16px)] py-[var(--spacing\\/sm,12px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0 w-full" : ""} data-name="btn-md">
          <div id={isDesktop ? "node-I238_1307-53_258" : isMobile ? "node-I238_1332-53_258" : ""} className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
            <p id={isDesktop ? "node-I238_1307-53_259" : isMobile ? "node-I238_1332-53_259" : ""} className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/on-action,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
              Close
            </p>
          </div>
        </div>
      </div>
      {isMobile && (
        <div data-node-id="238:1243" className="content-stretch flex flex-col gap-[var(--spacing\\/lg,20px)] items-start p-[var(--spacing\\/md,16px)] relative rounded-tl-[var(--corner-radius\\/lg\\+,20px)] rounded-tr-[var(--corner-radius\\/lg\\+,20px)] shrink-0 w-full" data-name="app-details">
          <div data-node-id="238:1244" className="content-stretch flex gap-[var(--spacing\\/xs,8px)] items-center relative shrink-0 w-full" data-name="img">
            <div data-node-id="238:1245" className="border border-[var(--colors\\/outline\\/03,#3f3f46)] border-solid relative rounded-[var(--corner-radius\\/sm,8px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 size-[48px]" data-name="app-img">
              <img className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[var(--corner-radius\\/sm,8px)] size-full" alt="" src={imgAppImage} />
            </div>
            <div data-node-id="238:1287" className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\\/xxs,4px)] items-start min-h-px min-w-px relative shrink-0" data-name="meta">
              <div data-node-id="238:1288" className="content-stretch flex gap-[var(--spacing\\/sm,12px)] items-center relative shrink-0 w-full" data-name="row">
                <p data-node-id="238:1289" className={`font-[family-name:var(--heading\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--heading\\/sm\\/font-weight,normal)] leading-[var(--heading\\/sm\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#fafafa)] text-[length:var(--heading\\/sm\\/font-size,18px)] tracking-[var(--tracking\\/heading\\/heading-sm,-0.5px)]`}>
                  Title
                </p>
                <div data-node-id="238:1290" className="bg-[var(--colors\\/surface\\/04,#172330)] content-stretch flex items-start px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/sm,8px)] shrink-0" data-name="badge">
                  <p data-node-id="I238:1290;151:1957" className={`font-[family-name:var(--label\\/xs\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/xs\\/font-weight,normal)] leading-[var(--label\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/xs\\/font-size,12px)] text-center tracking-[var(--tracking\\/global\\/label-xs,-0.5px)]`}>
                    Category
                  </p>
                </div>
              </div>
              <p data-node-id="238:1291" className={`font-[family-name:var(--body\\/xs\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/xs\\/font-weight,normal)] leading-[var(--body\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--body\\/xs\\/font-size,12px)] tracking-[var(--tracking\\/global\\/body-xs,0px)]`}>
                Publisher
              </p>
            </div>
          </div>
          <div data-node-id="238:1251" className="content-stretch flex flex-col gap-[var(--spacing\\/xs,0px)] items-start relative shrink-0 w-full" data-name="details">
            <p data-node-id="238:1294" className={`font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#fafafa)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] w-full whitespace-pre-wrap`}>
              Description
            </p>
          </div>
        </div>
      )}
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/heading/sm: Font(family: "heading/sm/font-family", style: heading/sm/font-weight, size: heading/sm/font-size, weight: 600, lineHeight: heading/sm/line-height, letterSpacing: tracking/heading/heading-sm), typography/label/xs: Font(family: "label/xs/font-family", style: label/xs/font-weight, size: label/xs/font-size, weight: 600, lineHeight: label/xs/line-height, letterSpacing: tracking/global/label-xs), typography/body/xs: Font(family: "body/xs/font-family", style: body/xs/font-weight, size: body/xs/font-size, weight: 400, lineHeight: body/xs/line-height, letterSpacing: tracking/global/body-xs), typography/body/sm: Font(family: "body/sm/font-family", style: body/sm/font-weight, size: body/sm/font-size, weight: 400, lineHeight: body/sm/line-height, letterSpacing: tracking/global/body-sm), mini app top: , typography/label/md: Font(family: "label/md/font-family", style: label/md/font-weight, size: label/md/font-size, weight: 600, lineHeight: label/md/line-height, letterSpacing: tracking/global/label-md), typography/label/sm: Font(family: "label/sm/font-family", style: label/sm/font-weight, size: label/sm/font-size, weight: 600, lineHeight: label/sm/line-height, letterSpacing: tracking/global/label-sm).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `242:2035`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a Modal component with two variants: desktop (wide, two-column layout) and mobile (stacked, single-column layout). Let me create clean HTML + CSS code for you.
modal.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modal Component</title>
  <link rel="stylesheet" href="modal.css">
</head>
<body>
  <!-- Desktop Modal -->
  <div class="modal modal--desktop">
    <!-- App Details Header (Desktop only) -->
    <div class="modal__header">
      <div class="modal__app-image">
        <img src="app-icon.png" alt="App Icon">
      </div>
      <div class="modal__details">
        <div class="modal__meta">
          <div class="modal__title-row">
            <h2 class="modal__title">Title</h2>
            <span class="modal__badge">Category</span>
          </div>
          <p class="modal__publisher">Publisher</p>
        </div>
        <p class="modal__description">Description</p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="modal__content">
      <div class="modal__container">
        <!-- Left Column - Manual Instructions -->
        <div class="modal__left">
          <h3 class="modal__section-title">Add Manually</h3>
          <ol class="modal__instructions">
            <li>Copy the App URL</li>
            <li>In Spixi, go to Apps → + Add Mini App</li>
            <li>Paste the link and tap Get from URL</li>
          </ol>
          <div class="modal__address-section">
            <label class="modal__label">App URL</label>
            <div class="modal__url-container">
              <span class="modal__url-text">URL-address</span>
              <button class="modal__copy-btn" aria-label="Copy URL">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column - QR Code -->
        <div class="modal__right">
          <div class="modal__qr-code">
            <img src="qr-code.png" alt="QR Code">
          </div>
          <p class="modal__qr-title">Scan with Spixi</p>
          <p class="modal__qr-note">*Open this mini app on another device.</p>
        </div>
      </div>
    </div>

    <!-- Close Button -->
    <div class="modal__footer">
      <button class="modal__close-btn">Close</button>
    </div>
  </div>

  <!-- Mobile Modal -->
  <div class="modal modal--mobile">
    <!-- App Details Header (Mobile - at bottom) -->
    <div class="modal__header modal__header--mobile">
      <div class="modal__app-row">
        <div class="modal__app-image modal__app-image--small">
          <img src="app-icon.png" alt="App Icon">
        </div>
        <div class="modal__meta">
          <div class="modal__title-row">
            <h2 class="modal__title modal__title--small">Title</h2>
            <span class="modal__badge">Category</span>
          </div>
          <p class="modal__publisher">Publisher</p>
        </div>
      </div>
      <p class="modal__description">Description</p>
    </div>

    <!-- Content Section -->
    <div class="modal__content modal__content--mobile">
      <div class="modal__single-column">
        <!-- Manual Instructions -->
        <div class="modal__left modal__left--mobile">
          <h3 class="modal__section-title">Add Manually</h3>
          <ol class="modal__instructions">
            <li>Copy the App URL</li>
            <li>In Spixi, go to Apps → + Add Mini App</li>
            <li>Paste the link and tap Get from URL</li>
          </ol>
          <div class="modal__address-section">
            <label class="modal__label">App URL</label>
            <div class="modal__url-container">
              <span class="modal__url-text">URL-address</span>
              <button class="modal__copy-btn" aria-label="Copy URL">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- QR Code -->
        <div class="modal__right modal__right--mobile">
          <p class="modal__qr-title">Or scan with Spixi</p>
          <div class="modal__qr-code">
            <img src="qr-code.png" alt="QR Code">
          </div>
          <p class="modal__qr-note">*Open this mini app on another device.</p>
        </div>
      </div>
    </div>

    <!-- Close Button -->
    <div class="modal__footer">
      <button class="modal__close-btn modal__close-btn--full">Close</button>
    </div>
  </div>
</body>
</html>
modal.css
css/* Base Modal Styles */
.modal {
  background-color: #04070b;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
}

/* Desktop Modal */
.modal--desktop {
  width: 760px;
  gap: 24px;
}

/* Mobile Modal */
.modal--mobile {
  width: 328px;
}

/* Header - Desktop */
.modal__header {
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 20px 20px 0 0;
}

/* Header - Mobile (positioned at bottom of visual hierarchy) */
.modal__header--mobile {
  padding: 16px;
  order: -1; /* Keeps it at top in DOM but can be styled differently */
}

.modal__app-row {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.modal__app-image {
  width: 96px;
  height: 96px;
  border: 1px solid #3f3f46;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  flex-shrink: 0;
}

.modal__app-image--small {
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

.modal__app-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal__details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.modal__meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.modal__title-row {
  display: flex;
  gap: 12px;
  align-items: center;
}

.modal__title {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.5px;
  color: #fafafa;
  margin: 0;
}

.modal__title--small {
  font-size: 18px;
  line-height: 24px;
}

.modal__badge {
  background-color: #172330;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.5px;
  color: #f9fafb;
  white-space: nowrap;
}

.modal__publisher {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #d4d4d8;
  margin: 0;
}

.modal__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #fafafa;
  margin: 0;
  white-space: pre-wrap;
}

/* Content Section */
.modal__content {
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}

.modal__content--mobile {
  padding: 0 16px;
  width: 100%;
}

.modal__container {
  display: flex;
  gap: 24px;
}

.modal__single-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

/* Left Column - Manual Instructions */
.modal__left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 24px;
}

.modal__left--mobile {
  padding: 16px 0;
}

.modal__section-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #d4d4d8;
  margin: 0;
}

.modal__instructions {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #f9fafb;
  margin: 0;
  padding-left: 21px;
}

.modal__instructions li {
  margin-bottom: 0;
}

.modal__address-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.modal__label {
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.5px;
  color: #f9fafb;
}

.modal__url-container {
  background-color: #172330;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 12px;
}

.modal__url-text {
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #f9fafb;
  white-space: pre-wrap;
}

.modal__copy-btn {
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #04070b;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__copy-btn:hover {
  opacity: 0.8;
}

/* Right Column - QR Code */
.modal__right {
  flex: 1;
  background-color: #0e1820;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 24px;
}

.modal__right--mobile {
  width: 100%;
}

.modal__qr-code {
  width: 166px;
  height: 164px;
}

.modal__qr-code img {
  width: 100%;
  height: 100%;
  display: block;
}

.modal__qr-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #d4d4d8;
  margin: 0;
}

.modal__qr-note {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #d4d4d8;
  text-align: center;
  margin: 0;
  white-space: pre-wrap;
}

/* Footer */
.modal__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  height: 80px;
}

.modal__close-btn {
  border: 2px solid #f9fafb;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 128px;
  padding: 12px 16px;
  border-radius: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #f9fafb;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal__close-btn--full {
  width: 100%;
}

.modal__close-btn:hover {
  background-color: rgba(249, 250, 251, 0.1);
}

.modal__close-btn:active {
  transform: scale(0.98);
}
Usage:
To use the Desktop version:
html<div class="modal modal--desktop">
  <!-- Use the desktop modal structure -->
</div>
To use the Mobile version:
html<div class="modal modal--mobile">
  <!-- Use the mobile modal structure -->
</div>
Key Features:

✅ Two responsive variants: Desktop (760px wide, two-column) and Mobile (328px wide, stacked)
✅ Desktop layout: Header with app details at top, two-column content (manual instructions + QR code)
✅ Mobile layout: App details at top, single-column stacked content
✅ Interactive elements: Copy button, close button with hover states
✅ All typography and spacing matches the Figma design exactly
✅ Color scheme: Dark theme with proper contrast

Note: Don't forget to include the Inter font:
html<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
Replace app-icon.png and qr-code.png with your actual image paths!DImplement this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=249-3469&m=dev Create this navbar components in html css as previsouly done. So I can paste it in claude code.Get design contextRequest{
  `nodeId`: `249:3469`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst imgIcon = "https://www.figma.com/api/mcp/asset/ed807d23-bbfa-4b28-b214-a2cdd507045e";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/46852b5c-c15b-44d8-9858-f1dc8a797475";
type ListProps = {
  className?: string;
  type?: "regular";
};

function List({ className, type = "regular" }: ListProps) {
  return (
    <div data-node-id="5:714" className={className}>
      <div data-node-id="5:713" className="absolute inset-[21.88%_12.5%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(249, 250, 251, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" alt="" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}
type NavBarProps = {
  size?: "desktop" | "mobile";
};

export default function NavBar({ size = "desktop" }: NavBarProps) {
  const isDesktop = size === "desktop";
  const isMobile = size === "mobile";
  return (
    <div id={isDesktop ? "node-249_3470" : isMobile ? "node-249_3481" : ""} className={`content-stretch flex items-center justify-between relative ${isDesktop ? "px-[var(--spacing\/super-lg,80px)] py-[var(--spacing\/md,16px)] w-[1439px]" : isMobile ? "px-[var(--spacing\/md,16px)] py-[var(--spacing\/xs,8px)] w-[375px]" : ""}`}>
      <div id={isDesktop ? "node-249_3471" : isMobile ? "node-249_3482" : ""} className={`content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative shrink-0 ${isDesktop ? "gap-[var(--spacing\/xxs,4px)]" : isMobile ? "gap-[var(--spacing\/xxs,0px)]" : ""}`} data-name="Logo">
        <div id={isDesktop ? "node-249_3472" : isMobile ? "node-249_3483" : ""} className="overflow-clip relative shrink-0 size-[32px]" data-name="spixi-logo">
          <div id={isDesktop ? "node-I249_3472-5_775" : isMobile ? "node-I249_3483-5_775" : ""} className="absolute inset-[3.19%_11.8%_3.59%_11.82%]" data-name="Group">
            <img className="block max-w-none size-full" alt="" src={imgIcon1} />
          </div>
        </div>
        {isDesktop && (
          <p data-node-id="249:3473" className={`font-[family-name:var(--heading\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--heading\\/md\\/font-weight,normal)] leading-[var(--heading\\/md\\/line-height,36px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--heading\\/md\\/font-size,24px)] text-center tracking-[var(--tracking\\/heading\\/heading-md,-1px)]`}>
            Spixi
          </p>
        )}
      </div>
      {isDesktop && (
        <div data-node-id="249:3474" className="content-stretch flex gap-[var(--spacing\\/super,64px)] items-center relative shrink-0" data-name="nav">
          <div data-node-id="249:3475" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3475;53:211" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3475;53:212" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Features
              </p>
            </div>
          </div>
          <div data-node-id="249:3476" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3476;53:211" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3476;53:212" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                How it works
              </p>
            </div>
          </div>
          <div data-node-id="249:3477" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3477;53:211" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3477;53:212" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Mini Apps
              </p>
            </div>
          </div>
          <div data-node-id="249:3478" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3478;53:211" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3478;53:212" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Technology
              </p>
            </div>
          </div>
          <div data-node-id="249:3522" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3522;53:211" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3522;53:212" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                FAQ
              </p>
            </div>
          </div>
        </div>
      )}
      <div id={isDesktop ? "node-249_3479" : isMobile ? "node-249_3484" : ""} className={`content-stretch flex items-center justify-end relative shrink-0 ${isDesktop ? "flex-[1_0_0] gap-[var(--spacing\/lg,0px)] min-h-px min-w-px" : isMobile ? "gap-[var(--spacing\/lg,20px)]" : ""}`} data-name="right">
        {isDesktop && (
          <div data-node-id="249:3480" className="border-[var(--colors\\/outline\\/action-secondary\\/default,#f9fafb)] border-[var(--outline-width\\/md,2px)] border-solid content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/md,16px)] py-[var(--spacing\\/sm,12px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3480;53:258" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3480;53:259" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/on-action,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Download Spixi
              </p>
            </div>
          </div>
        )}
        {isMobile && (
          <>
            <div data-node-id="249:3485" className="border-[var(--colors\\/outline\\/action-secondary\\/default,#f9fafb)] border-[var(--outline-width\\/md,2px)] border-solid content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/sm,12px)] py-[var(--spacing\\/xs,8px)] relative rounded-[var(--corner-radius\\/md,12px)] shrink-0" data-name="btn-sm">
              <div data-node-id="I249:3485;151:1695" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
                <p data-node-id="I249:3485;151:1696" className={`font-[family-name:var(--label\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/sm\\/font-weight,normal)] leading-[var(--label\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/on-action,#f9fafb)] text-[length:var(--label\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/label-sm,-0.5px)]`}>
                  Download Spixi
                </p>
              </div>
            </div>
            <List className="overflow-clip relative shrink-0 size-[24px]" />
          </>
        )}
      </div>
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/heading/md: Font(family: "heading/md/font-family", style: heading/md/font-weight, size: heading/md/font-size, weight: 600, lineHeight: heading/md/line-height, letterSpacing: tracking/heading/heading-md), typography/label/md: Font(family: "label/md/font-family", style: label/md/font-weight, size: label/md/font-size, weight: 600, lineHeight: label/md/line-height, letterSpacing: tracking/global/label-md), typography/label/sm: Font(family: "label/sm/font-family", style: label/sm/font-weight, size: label/sm/font-size, weight: 600, lineHeight: label/sm/line-height, letterSpacing: tracking/global/label-sm).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `249:3469`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a NavBar component with two variants: Desktop (full navigation with menu items) and Mobile (logo + download button + hamburger menu). Let me create clean HTML + CSS code for you.
navbar.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NavBar Component</title>
  <link rel="stylesheet" href="navbar.css">
</head>
<body>
  <!-- Desktop NavBar -->
  <nav class="navbar navbar--desktop">
    <!-- Logo -->
    <div class="navbar__logo">
      <div class="navbar__logo-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L4 8v8c0 7.73 5.34 14.96 12 16.73 6.66-1.77 12-9 12-16.73V8L16 2z" fill="url(#gradient)" stroke="#fff" stroke-width="2"/>
          <defs>
            <linearGradient id="gradient" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8B5CF6"/>
              <stop offset="1" stop-color="#EC4899"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span class="navbar__logo-text">Spixi</span>
    </div>

    <!-- Navigation Links -->
    <div class="navbar__nav">
      <a href="#features" class="navbar__nav-link">Features</a>
      <a href="#how-it-works" class="navbar__nav-link">How it works</a>
      <a href="#mini-apps" class="navbar__nav-link">Mini Apps</a>
      <a href="#technology" class="navbar__nav-link">Technology</a>
      <a href="#faq" class="navbar__nav-link">FAQ</a>
    </div>

    <!-- Right Section -->
    <div class="navbar__right">
      <button class="navbar__download-btn">Download Spixi</button>
    </div>
  </nav>

  <!-- Mobile NavBar -->
  <nav class="navbar navbar--mobile">
    <!-- Logo -->
    <div class="navbar__logo">
      <div class="navbar__logo-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L4 8v8c0 7.73 5.34 14.96 12 16.73 6.66-1.77 12-9 12-16.73V8L16 2z" fill="url(#gradient-mobile)" stroke="#fff" stroke-width="2"/>
          <defs>
            <linearGradient id="gradient-mobile" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8B5CF6"/>
              <stop offset="1" stop-color="#EC4899"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <!-- Right Section -->
    <div class="navbar__right navbar__right--mobile">
      <button class="navbar__download-btn navbar__download-btn--mobile">Download Spixi</button>
      <button class="navbar__menu-btn" aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </nav>
</body>
</html>
navbar.css
css/* Base Navbar Styles */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  background-color: transparent;
}

/* Desktop NavBar */
.navbar--desktop {
  width: 100%;
  max-width: 1439px;
  padding: 16px 80px;
  margin: 0 auto;
}

/* Mobile NavBar */
.navbar--mobile {
  width: 100%;
  max-width: 375px;
  padding: 8px 16px;
  margin: 0 auto;
}

/* Logo Section */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.navbar--mobile .navbar__logo {
  gap: 0;
  flex: 1;
}

.navbar__logo-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar__logo-text {
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -1px;
  color: #f9fafb;
  white-space: nowrap;
}

/* Navigation Links (Desktop only) */
.navbar__nav {
  display: flex;
  gap: 64px;
  align-items: center;
}

.navbar__nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #f9fafb;
  text-decoration: none;
  transition: all 0.2s ease;
}

.navbar__nav-link:hover {
  background-color: rgba(249, 250, 251, 0.1);
}

.navbar__nav-link:active {
  transform: scale(0.98);
}

/* Right Section */
.navbar__right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}

.navbar--desktop .navbar__right {
  flex: 1;
}

/* Download Button */
.navbar__download-btn {
  border: 2px solid #f9fafb;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #f9fafb;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.navbar__download-btn:hover {
  background-color: rgba(249, 250, 251, 0.1);
}

.navbar__download-btn:active {
  transform: scale(0.98);
}

/* Mobile Download Button */
.navbar__download-btn--mobile {
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
}

/* Menu Button (Mobile only) */
.navbar__menu-btn {
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
}

.navbar__menu-btn:hover {
  opacity: 0.8;
}

.navbar__menu-btn:active {
  transform: scale(0.95);
}

/* Responsive: Hide elements based on viewport */
@media (max-width: 768px) {
  .navbar--desktop {
    display: none;
  }
}

@media (min-width: 769px) {
  .navbar--mobile {
    display: none;
  }
}

/* Optional: Full-width navbar background */
body {
  margin: 0;
  padding: 0;
  background-color: #000;
}
Usage:
For Desktop:
html<nav class="navbar navbar--desktop">
  <!-- Desktop navbar content -->
</nav>
For Mobile:
html<nav class="navbar navbar--mobile">
  <!-- Mobile navbar content -->
</nav>
Key Features:

✅ Two responsive variants: Desktop (1439px max-width) and Mobile (375px max-width)
✅ Desktop layout: Logo + Navigation Links (Features, How it works, Mini Apps, Technology, FAQ) + Download button
✅ Mobile layout: Logo + Download button + Hamburger menu icon
✅ Interactive elements: All links and buttons have hover/active states
✅ Typography: Matches Figma design exactly
✅ Responsive: Automatically switches between desktop/mobile based on viewport width

Optional JavaScript for Menu Toggle:
javascript// Add this to make the mobile menu button functional
const menuBtn = document.querySelector('.navbar__menu-btn');
menuBtn?.addEventListener('click', () => {
  // Add your mobile menu open logic here
  console.log('Menu clicked!');
});
Note: Include the Inter font:
html<link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet">
The SVG logo is a simplified placeholder - you can replace it with your actual Spixi logo SVG or image!Dcreate list item
Implement this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=132-1291&m=devGet design contextRequest{
  `nodeId`: `132:1291`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst imgIcon = "https://www.figma.com/api/mcp/asset/914eb787-1dad-43c3-b219-5a497e564e72";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/e05c444d-3cc0-4398-8281-025073b626ae";
const img = "https://www.figma.com/api/mcp/asset/d5c04b90-0eb2-4955-838b-226ad9a8d718";
type WifiHighProps = {
  className?: string;
  type?: "fill" | "regular" | "light";
};

function WifiHigh({ className, type = "light" }: WifiHighProps) {
  return (
    <div data-node-id="132:1424" className={className}>
      <div data-node-id="132:1423" className="absolute inset-[19.53%_7.02%_16.41%_7.02%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" alt="" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}
type ChatCircleDotsProps = {
  className?: string;
  type?: "regular" | "fill" | "light";
};

function ChatCircleDots({ className, type = "light" }: ChatCircleDotsProps) {
  return (
    <div data-node-id="132:1306" className={className}>
      <div data-node-id="132:1305" className="absolute inset-[10.17%_10.16%_10.15%_10.16%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" alt="" src={imgIcon1} />
        </div>
      </div>
    </div>
  );
}
type ListItemProps = {
  text?: string;
  title?: string;
  showBodySm?: boolean;
  lightIcon?: React.ReactNode | null;
};

export default function ListItem({ text = "text", title = "Title", showBodySm = true, lightIcon = null }: ListItemProps) {
  return (
    <div className="content-stretch flex gap-[var(--spacing\/lg,20px)] items-center relative w-[468px]" data-name="list-item" data-node-id="132:1291">
      <div className="bg-[var(--colors\/surface\/02,#f3f4f6)] content-stretch flex gap-[var(--spacing\/none,0px)] items-center p-[var(--spacing\/sm,12px)] relative rounded-[var(--corner-radius\/xxl,32px)] shrink-0" data-name="icon" data-node-id="132:1285">
        {lightIcon || (
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ChatCircleDots" data-node-id="132:1337">
            <div className="absolute inset-[10.17%_10.16%_10.15%_10.16%]" data-name="icon" data-node-id="I132:1337;132:1305">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 79, 196, 1)" } as React.CSSProperties}>
                <img alt="" className="block max-w-none size-full" src={img} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/xs,8px)] items-start justify-center min-h-px min-w-px relative shrink-0 whitespace-pre-wrap" data-name="content" data-node-id="132:1287">
        <p className="font-[family-name:var(--label\/lg\/font-family,'Inter:semibold',sans-serif)] font-[var(--label\/lg\/font-weight,normal)] leading-[var(--label\/lg\/line-height,28px)] relative shrink-0 text-[color:var(--colors\/text\/01,#04070b)] text-[length:var(--label\/lg\/font-size,18px)] tracking-[var(--tracking\/global\/label-lg,-0.5px)] w-full" data-node-id="132:1288">
          {title}
        </p>
        {showBodySm && (
          <p className="font-[family-name:var(--body\/sm\/font-family,'Inter:regular',sans-serif)] font-[var(--body\/sm\/font-weight,normal)] leading-[var(--body\/sm\/line-height,20px)] relative shrink-0 text-[color:var(--colors\/text\/02,#172330)] text-[length:var(--body\/sm\/font-size,14px)] tracking-[var(--tracking\/global\/body-sm,0px)] w-full" data-node-id="132:1289">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/label/lg: Font(family: "label/lg/font-family", style: label/lg/font-weight, size: label/lg/font-size, weight: 600, lineHeight: label/lg/line-height, letterSpacing: tracking/global/label-lg), typography/body/sm: Font(family: "body/sm/font-family", style: body/sm/font-weight, size: body/sm/font-size, weight: 400, lineHeight: body/sm/line-height, letterSpacing: tracking/global/body-sm).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `132:1291`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a List Item component with an icon, title, and optional description text. Let me create clean HTML + CSS code for you.
list-item.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>List Item Component</title>
  <link rel="stylesheet" href="list-item.css">
</head>
<body>
  <!-- List Item with Description -->
  <div class="list-item">
    <div class="list-item__icon">
      <svg class="list-item__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333S23.364 2.667 16 2.667 2.667 8.637 2.667 16 8.637 29.333 16 29.333z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.667 13.333h.013M16 13.333h.013M21.333 13.333h.013" stroke="#AD4FC4" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.667 19.333c1.333 1.778 3.11 2.667 5.333 2.667 2.222 0 4-0.889 5.333-2.667" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="list-item__content">
      <h3 class="list-item__title">Title</h3>
      <p class="list-item__text">text</p>
    </div>
  </div>

  <!-- List Item without Description -->
  <div class="list-item">
    <div class="list-item__icon">
      <svg class="list-item__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9.333L16 4l8 5.333v9.334c0 7.73-5.34 14.96-12 16.73-6.66-1.77-12-9-12-16.73V9.333z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 14.667v5.333M16 24h.013" stroke="#AD4FC4" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="list-item__content">
      <h3 class="list-item__title">Another Title</h3>
    </div>
  </div>

  <!-- List Item with WiFi Icon -->
  <div class="list-item">
    <div class="list-item__icon">
      <svg class="list-item__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.333 11.333C8.222 7.556 13.889 5.333 16 5.333c2.111 0 7.778 2.223 12.667 6M7.111 16c3.334-2.667 6.667-4 8.889-4s5.555 1.333 8.889 4M11.556 20.667c1.777-1.334 3.555-2 4.444-2 .89 0 2.667.666 4.444 2M16 26.667h.013" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="list-item__content">
      <h3 class="list-item__title">Network Connection</h3>
      <p class="list-item__text">Stay connected with reliable network</p>
    </div>
  </div>
</body>
</html>
list-item.css
css/* Base List Item Styles */
.list-item {
  display: flex;
  gap: 20px;
  align-items: center;
  width: 468px;
  font-family: 'Inter', sans-serif;
}

/* Icon Container */
.list-item__icon {
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 32px;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
}

.list-item__icon-svg {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

/* Content Section */
.list-item__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
  white-space: pre-wrap;
}

/* Title */
.list-item__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.5px;
  color: #04070b;
  margin: 0;
  width: 100%;
}

/* Description Text */
.list-item__text {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #172330;
  margin: 0;
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .list-item {
    width: 100%;
    max-width: 468px;
  }
}

/* Dark theme variant (optional) */
.list-item--dark {
  background-color: transparent;
}

.list-item--dark .list-item__icon {
  background-color: #172330;
}

.list-item--dark .list-item__title {
  color: #fafafa;
}

.list-item--dark .list-item__text {
  color: #d4d4d8;
}

/* Optional hover effect */
.list-item:hover .list-item__icon {
  background-color: #e5e7eb;
  transition: background-color 0.2s ease;
}

.list-item--dark:hover .list-item__icon {
  background-color: #1e2936;
}

/* Utility: List Item without description */
.list-item--no-description .list-item__content {
  gap: 0;
}
Usage Examples:
1. List Item with Description:
html<div class="list-item">
  <div class="list-item__icon">
    <!-- Your icon SVG here -->
  </div>
  <div class="list-item__content">
    <h3 class="list-item__title">Title</h3>
    <p class="list-item__text">Description text goes here</p>
  </div>
</div>
2. List Item without Description:
html<div class="list-item list-item--no-description">
  <div class="list-item__icon">
    <!-- Your icon SVG here -->
  </div>
  <div class="list-item__content">
    <h3 class="list-item__title">Title</h3>
  </div>
</div>
3. Dark Theme Variant:
html<div class="list-item list-item--dark">
  <div class="list-item__icon">
    <!-- Your icon SVG here -->
  </div>
  <div class="list-item__content">
    <h3 class="list-item__title">Title</h3>
    <p class="list-item__text">Description text</p>
  </div>
</div>
Key Features:

✅ Flexible content: Supports both with and without description text
✅ Icon container: Circular background with proper padding (56x56px)
✅ Typography: Matches Figma design exactly
✅ Responsive: Adapts to smaller screens
✅ Optional dark theme: Easy to switch color schemes
✅ Hover effects: Subtle background color change on hover
✅ Custom icons: Easy to swap SVG icons

Icon SVG Examples:
The component supports any 32x32 icon. Here are some common icon patterns you can use:
html<!-- Chat Icon -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="13.333" stroke="#AD4FC4" stroke-width="2"/>
  <circle cx="10.667" cy="13.333" r="1.333" fill="#AD4FC4"/>
  <circle cx="16" cy="13.333" r="1.333" fill="#AD4FC4"/>
  <circle cx="21.333" cy="13.333" r="1.333" fill="#AD4FC4"/>
</svg>

<!-- WiFi Icon -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M3.333 11.333C8.222 7.556 13.889 5.333 16 5.333c2.111 0 7.778 2.223 12.667 6" stroke="#AD4FC4" stroke-width="2"/>
  <path d="M7.111 16c3.334-2.667 6.667-4 8.889-4s5.555 1.333 8.889 4" stroke="#AD4FC4" stroke-width="2"/>
  <circle cx="16" cy="26.667" r="1.333" fill="#AD4FC4"/>
</svg>
Note: Include the Inter font:
html<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
This component is perfect for feature lists, benefit sections, or any list-based content on your website!DImplement this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=56-723&m=devGet design contextRequest{
  `nodeId`: `56:723`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst imgIcon = "https://www.figma.com/api/mcp/asset/a3d2dcb3-95cd-4ee1-8ea0-90ea953d1fba";
const img = "https://www.figma.com/api/mcp/asset/035af245-cf9c-4c00-a3c1-0a17a31b33ba";
type ChatsCircleProps = {
  className?: string;
  type?: "fill" | "regular" | "light";
};

function ChatsCircle({ className, type = "light" }: ChatsCircleProps) {
  return (
    <div data-node-id="112:9020" className={className}>
      <div data-node-id="112:9019" className="absolute inset-[10.16%_7.02%_10.15%_7.03%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" alt="" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}
type CardMdProps = {
  icon?: React.ReactNode | null;
};

export default function CardMd({ icon = null }: CardMdProps) {
  return (
    <div className="bg-[var(--colors\/surface\/02,#f3f4f6)] border border-[var(--colors\/outline\/02,#a1a1aa)] border-solid content-stretch flex flex-col gap-[var(--spacing\/xl,24px)] h-[276px] items-start overflow-clip p-[var(--spacing\/xl,24px)] relative rounded-[var(--corner-radius\/xxl,32px)] w-[394.5px]" data-name="card-md" data-node-id="56:723">
      <div className="bg-[var(--colors\/surface\/01,#f9fafb)] content-stretch flex gap-[var(--spacing\/none,0px)] items-center p-[var(--spacing\/sm,12px)] relative rounded-[var(--corner-radius\/xxl,32px)] shadow-[0px_0px_12px_0px_rgba(216,182,250,0.25)] shrink-0" data-name="icon" data-node-id="56:717">
        {icon || (
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ChatsCircle" data-node-id="56:718">
            <div className="absolute inset-[9.45%_6.25%_9.37%_6.25%]" data-name="icon" data-node-id="I56:718;25:20121">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 79, 196, 1)" } as React.CSSProperties}>
                <img alt="" className="block max-w-none size-full" src={img} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[color:var(--colors\/text\/01,#04070b)] w-full whitespace-pre-wrap" data-name="text" data-node-id="56:719">
        <p className="font-[family-name:var(--heading\/md\/font-family,'Inter:semibold',sans-serif)] font-[var(--heading\/md\/font-weight,normal)] leading-[var(--heading\/md\/line-height,36px)] relative shrink-0 text-[length:var(--heading\/md\/font-size,24px)] tracking-[var(--tracking\/heading\/heading-md,-1px)] w-full" data-node-id="56:720">
          Title
        </p>
        <p className="font-[family-name:var(--body\/md\/font-family,'Inter:regular',sans-serif)] font-[var(--body\/md\/font-weight,normal)] leading-[var(--body\/md\/line-height,24px)] relative shrink-0 text-[length:var(--body\/md\/font-size,16px)] tracking-[var(--tracking\/global\/body-md,0px)] w-full" data-node-id="56:721">
          body
        </p>
      </div>
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/heading/md: Font(family: "heading/md/font-family", style: heading/md/font-weight, size: heading/md/font-size, weight: 600, lineHeight: heading/md/line-height, letterSpacing: tracking/heading/heading-md), typography/body/md: Font(family: "body/md/font-family", style: body/md/font-weight, size: body/md/font-size, weight: 400, lineHeight: body/md/line-height, letterSpacing: tracking/global/body-md).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `56:723`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a Card component (medium size) with an icon, title, and body text. It has a nice gradient shadow effect on the icon. Let me create clean HTML + CSS code for you.
card-md.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Medium Component</title>
  <link rel="stylesheet" href="card-md.css">
</head>
<body>
  <!-- Card Medium - Default -->
  <div class="card-md">
    <div class="card-md__icon">
      <svg class="card-md__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.333 26.667h-4A2.667 2.667 0 0 1 4.666 24V8a2.667 2.667 0 0 1 2.667-2.667h4a2.667 2.667 0 0 1 2.667 2.667v16a2.667 2.667 0 0 1-2.667 2.667z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.666 26.667h-4A2.667 2.667 0 0 1 18 24V13.333a2.667 2.667 0 0 1 2.667-2.666h4a2.667 2.667 0 0 1 2.667 2.666V24a2.667 2.667 0 0 1-2.667 2.667z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="9.333" cy="12" r="1.333" fill="#AD4FC4"/>
        <circle cx="22.666" cy="17.333" r="1.333" fill="#AD4FC4"/>
      </svg>
    </div>
    <div class="card-md__text">
      <h3 class="card-md__title">Title</h3>
      <p class="card-md__body">body</p>
    </div>
  </div>

  <!-- Card Medium - Chat Icon -->
  <div class="card-md">
    <div class="card-md__icon">
      <svg class="card-md__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.333 18.667h-8A2.667 2.667 0 0 1 10.666 16V8a2.667 2.667 0 0 1 2.667-2.667h8A2.667 2.667 0 0 1 24 8v8a2.667 2.667 0 0 1-2.667 2.667z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.666 13.333H8a2.667 2.667 0 0 0-2.667 2.667v8A2.667 2.667 0 0 0 8 26.667h2.667a2.667 2.667 0 0 0 2.666-2.667v-8a2.667 2.667 0 0 0-2.666-2.667z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 13.333h2.667A2.667 2.667 0 0 1 29.333 16v8a2.667 2.667 0 0 1-2.666 2.667H24a2.667 2.667 0 0 1-2.667-2.667v-8A2.667 2.667 0 0 1 24 13.333z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="card-md__text">
      <h3 class="card-md__title">Real-time Messaging</h3>
      <p class="card-md__body">Connect instantly with friends and family through secure, encrypted conversations.</p>
    </div>
  </div>

  <!-- Card Medium - Security Icon -->
  <div class="card-md">
    <div class="card-md__icon">
      <svg class="card-md__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 5.333L6.666 9.333v8c0 5.773 4 11.174 9.334 12.5 5.333-1.326 9.333-6.727 9.333-12.5v-8L16 5.333z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 16v4M16 24h.013" stroke="#AD4FC4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="card-md__text">
      <h3 class="card-md__title">End-to-End Encryption</h3>
      <p class="card-md__body">Your data is protected with military-grade encryption, ensuring complete privacy.</p>
    </div>
  </div>
</body>
</html>
card-md.css
css/* Base Card Medium Styles */
.card-md {
  background-color: #f3f4f6;
  border: 1px solid #a1a1aa;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 276px;
  padding: 24px;
  border-radius: 32px;
  width: 394.5px;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  position: relative;
}

/* Icon Container */
.card-md__icon {
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 32px;
  box-shadow: 0px 0px 12px 0px rgba(216, 182, 250, 0.25);
  width: 56px;
  height: 56px;
  flex-shrink: 0;
}

.card-md__icon-svg {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

/* Text Content */
.card-md__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #04070b;
  width: 100%;
  white-space: pre-wrap;
  flex-shrink: 0;
}

/* Title */
.card-md__title {
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -1px;
  margin: 0;
  width: 100%;
  color: #04070b;
}

/* Body Text */
.card-md__body {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  margin: 0;
  width: 100%;
  color: #04070b;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-md {
    width: 100%;
    max-width: 394.5px;
    height: auto;
    min-height: 276px;
  }
}

/* Dark theme variant (optional) */
.card-md--dark {
  background-color: #0e1820;
  border-color: #3f3f46;
}

.card-md--dark .card-md__icon {
  background-color: #172330;
  box-shadow: 0px 0px 12px 0px rgba(139, 92, 246, 0.25);
}

.card-md--dark .card-md__title,
.card-md--dark .card-md__body {
  color: #fafafa;
}

/* Hover effect */
.card-md {
  transition: all 0.3s ease;
}

.card-md:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
}

.card-md:hover .card-md__icon {
  box-shadow: 0px 0px 16px 0px rgba(216, 182, 250, 0.4);
}

.card-md--dark:hover {
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.3);
}

.card-md--dark:hover .card-md__icon {
  box-shadow: 0px 0px 16px 0px rgba(139, 92, 246, 0.4);
}

/* Grid layout helper (for multiple cards) */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(394.5px, 1fr));
  gap: 24px;
  padding: 24px;
}

@media (max-width: 450px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
Usage Examples:
1. Basic Card:
html<div class="card-md">
  <div class="card-md__icon">
    <!-- Your icon SVG here -->
  </div>
  <div class="card-md__text">
    <h3 class="card-md__title">Your Title</h3>
    <p class="card-md__body">Your body text goes here</p>
  </div>
</div>
2. Dark Theme Card:
html<div class="card-md card-md--dark">
  <div class="card-md__icon">
    <!-- Your icon SVG here -->
  </div>
  <div class="card-md__text">
    <h3 class="card-md__title">Your Title</h3>
    <p class="card-md__body">Your body text goes here</p>
  </div>
</div>
3. Multiple Cards in Grid:
html<div class="card-grid">
  <div class="card-md">
    <!-- Card 1 -->
  </div>
  <div class="card-md">
    <!-- Card 2 -->
  </div>
  <div class="card-md">
    <!-- Card 3 -->
  </div>
</div>
Key Features:

✅ Fixed dimensions: 394.5px × 276px as per design
✅ Icon with glow: Circular icon container with purple shadow effect
✅ Typography: Matches Figma design exactly
✅ Responsive: Adapts to smaller screens
✅ Dark theme variant: Easy to switch to dark mode
✅ Hover effects: Smooth lift and enhanced shadow on hover
✅ Grid helper: CSS class for displaying multiple cards in a grid

Icon SVG Examples:
Here are some icon variations you can use (all 32×32):
html<!-- Chat Circles Icon -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M21.333 18.667h-8A2.667 2.667 0 0 1 10.666 16V8a2.667 2.667 0 0 1 2.667-2.667h8A2.667 2.667 0 0 1 24 8v8a2.667 2.667 0 0 1-2.667 2.667z" stroke="#AD4FC4" stroke-width="2"/>
  <path d="M10.666 13.333H8a2.667 2.667 0 0 0-2.667 2.667v8A2.667 2.667 0 0 0 8 26.667h2.667" stroke="#AD4FC4" stroke-width="2"/>
</svg>

<!-- Shield Icon -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16 5.333L6.666 9.333v8c0 5.773 4 11.174 9.334 12.5 5.333-1.326 9.333-6.727 9.333-12.5v-8L16 5.333z" stroke="#AD4FC4" stroke-width="2"/>
  <circle cx="16" cy="16" r="1.5" fill="#AD4FC4"/>
</svg>

<!-- Network Icon -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="8" r="2.667" stroke="#AD4FC4" stroke-width="2"/>
  <circle cx="8" cy="24" r="2.667" stroke="#AD4FC4" stroke-width="2"/>
  <circle cx="24" cy="24" r="2.667" stroke="#AD4FC4" stroke-width="2"/>
  <path d="M14.5 10L10 22M17.5 10L22 22" stroke="#AD4FC4" stroke-width="2"/>
</svg>
Note: Include the Inter font:
html<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
This card component is perfect for feature sections, service listings, or any content that needs a clean, modern card layout!DImplement this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=252-3015&m=devGet design contextRequest{
  `nodeId`: `252:3015`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst img16 = "https://www.figma.com/api/mcp/asset/36b79dd3-6f66-440f-9cca-f49813d2275a";
const img17 = "https://www.figma.com/api/mcp/asset/ca88a000-5e7d-4304-91e9-cb423a9cbcda";
const img18 = "https://www.figma.com/api/mcp/asset/71818e95-190b-43df-af67-79f355c3b784";
const imgColor2 = "https://www.figma.com/api/mcp/asset/aa757f5a-b463-4d18-a217-c94c9ebb5852";
const imgColor1 = "https://www.figma.com/api/mcp/asset/2a1be162-f4d1-482c-8939-b9ab5679b819";
const imgOutlines = "https://www.figma.com/api/mcp/asset/1ebe5b96-8500-4bd3-b14f-5fb5aa70f635";
const imgOutlines1 = "https://www.figma.com/api/mcp/asset/d05e2c84-850f-4255-b667-e76b0f609b9f";
const imgOutlines2 = "https://www.figma.com/api/mcp/asset/0dc59f42-dfef-4af8-aa53-f778017ec578";
const img = "https://www.figma.com/api/mcp/asset/3d81394d-99cd-46d9-83f7-836ead3e9d51";
const img1 = "https://www.figma.com/api/mcp/asset/c16614c8-7315-40fc-991f-e9b9c06b0df1";
const img2 = "https://www.figma.com/api/mcp/asset/6eeaf679-fb50-4395-8bc9-0f01a9c2ee3d";
const img3 = "https://www.figma.com/api/mcp/asset/a0ca4ac3-cc82-4073-8474-3fde6152eb21";
const img4 = "https://www.figma.com/api/mcp/asset/5871355a-00fe-4d07-a230-f1734953f0e5";
const img5 = "https://www.figma.com/api/mcp/asset/7c3afb8e-df35-447f-bd51-1082666dfc74";
const img6 = "https://www.figma.com/api/mcp/asset/1fa292ad-e09e-4ec5-a4af-991d74d65230";
const img7 = "https://www.figma.com/api/mcp/asset/d504c685-c68c-4f5a-87c4-69cf8158a894";
const img8 = "https://www.figma.com/api/mcp/asset/f3a19ff9-9a4e-461f-b38c-d5764274d6be";
const img9 = "https://www.figma.com/api/mcp/asset/96b7a7aa-8e66-40bc-b5a4-2fa9409e24df";
const img10 = "https://www.figma.com/api/mcp/asset/403790c7-3f9f-4604-9742-a06eddf1c0b0";
const img11 = "https://www.figma.com/api/mcp/asset/6195253a-60a9-4785-b02f-d7f4b7d12a4d";
const img12 = "https://www.figma.com/api/mcp/asset/077506ad-c36a-4b45-98db-bf3a2c71e1c3";
const img13 = "https://www.figma.com/api/mcp/asset/7a7d6a6b-0a54-43d3-a14a-4b6512203ded";
const img14 = "https://www.figma.com/api/mcp/asset/72cb913c-c74a-4d74-9a13-86dc791e257e";
const img15 = "https://www.figma.com/api/mcp/asset/d0af0793-7293-4641-ace0-6f158e373cb7";
type IllustrationProps = {
  className?: string;
  property1?: "apps" | "chats" | "privacy" | "wallet" | "Variant6" | "business";
};

function Illustration({ className, property1 = "chats" }: IllustrationProps) {
  return (
    <div data-node-id="85:2187" className={className}>
      <div data-node-id="85:2188" className="absolute contents inset-[8.34%_2.74%_8.34%_2.75%]" data-name="Product-Newsletter-01">
        <div data-node-id="85:2189" className="absolute inset-[8.34%_21.87%_24.33%_30.84%]" data-name="color 2">
          <img className="block max-w-none size-full" alt="" src={imgColor2} />
        </div>
        <div data-node-id="85:2195" className="absolute inset-[24.31%_6.72%_9.3%_15.89%]" data-name="color 1">
          <img className="block max-w-none size-full" alt="" src={imgColor1} />
        </div>
        <div data-node-id="85:2203" className="absolute inset-[8.34%_2.74%_8.34%_2.75%]" data-name="outlines">
          <div className="absolute inset-[-0.3%_-0.26%]">
            <img className="block max-w-none size-full" alt="" src={imgOutlines} />
          </div>
        </div>
      </div>
    </div>
  );
}
type CardlgProps = {
  ilustration?: React.ReactNode | null;
  state?: "default" | "hover";
};

export default function Cardlg({ ilustration = null, state = "default" }: CardlgProps) {
  const isDefault = state === "default";
  const isHover = state === "hover";
  return (
    <div id={isDefault ? "node-132_2088" : isHover ? "node-252_3016" : ""} className={`bg-gradient-to-r border border-[var(--colors\/outline\/02,#a1a1aa)] border-solid content-stretch flex flex-col gap-[var(--spacing\/super-lg,80px)] h-[395px] items-start overflow-clip p-[var(--spacing\/xl,24px)] relative rounded-[var(--corner-radius\/xxl,32px)] w-[629px] ${isDefault ? "from-[#f9fafb] to-[#f9fafb]" : isHover ? "from-[#e5e7eb] to-[#e5e7eb]" : ""}`}>
      <p id={isDefault ? "node-132_1556" : isHover ? "node-252_3017" : ""} className={`font-[family-name:var(--label\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/sm\\/font-weight,normal)] leading-[var(--label\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/accent,#ad4fc4)] text-[length:var(--label\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/label-sm,-0.5px)]`}>
        Technology
      </p>
      <div id={isDefault ? "node-132_1557" : isHover ? "node-252_3018" : ""} className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px pb-[var(--spacing\\/xl,24px)] pt-0 px-0 relative shrink-0 w-[387px]" data-name="content">
        <div id={isDefault ? "node-132_1558" : isHover ? "node-252_3019" : ""} className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="text">
          <p id={isDefault ? "node-132_1559" : isHover ? "node-252_3020" : ""} className={`font-[family-name:var(--heading\\/lg\\/font-family,"Sora:semibold",sans-serif)] font-[var(--heading\\/lg\\/font-weight,normal)] leading-[var(--heading\\/lg\\/line-height,44px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#04070b)] text-[length:var(--heading\\/lg\\/font-size,32px)] tracking-[var(--tracking\\/heading\\/heading-lg,-1px)] w-full`}>
            Title
          </p>
          <p id={isDefault ? "node-132_1560" : isHover ? "node-252_3021" : ""} className={`font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#172330)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] w-full`}>
            text
          </p>
        </div>
        <div id={isDefault ? "node-132_1561" : isHover ? "node-252_3022" : ""} className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
          <div id={isDefault ? "node-I132_1561-53_211" : isHover ? "node-I252_3022-53_211" : ""} className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
            <p id={isDefault ? "node-I132_1561-53_212" : isHover ? "node-I252_3022-53_212" : ""} className={`font-[family-name:var(--label\/md\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\/md\/font-weight,normal)] leading-[var(--label\/md\/line-height,24px)] relative shrink-0 text-[length:var(--label\/md\/font-size,16px)] tracking-[var(--tracking\/global\/label-md,-0.5px)] ${isDefault ? "text-[color:var(--colors\/text\/01,#04070b)]" : isHover ? "text-[color:var(--colors\/text\/action\/default,#003d7a)]" : ""}`}>
              button
            </p>
          </div>
          <div id={isDefault ? "node-I132_1561-53_508" : isHover ? "node-I252_3022-53_508" : ""} className="overflow-clip relative shrink-0 size-[24px]" data-name="type=regular">
            <div id={isDefault ? "node-I132_1561-53_508-71_1171" : isHover ? "node-I252_3022-53_508-71_1171" : ""} className="absolute inset-[18.75%_12.5%]" data-name="icon">
              <div className="absolute inset-0" style={(isDefault ? { "--fill-0": "rgba(4, 7, 11, 1)" } : isHover ? { "--fill-0": "rgba(0, 61, 122, 1)" } : undefined) as React.CSSProperties}>
                <img className="block max-w-none size-full" alt="" src={isDefault ? imgOutlines1 : isHover ? imgOutlines2 : ""} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDefault &&
        (ilustration || (
          <div className="absolute overflow-clip right-[-75px] size-[262px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="illustration" data-node-id="132:1958">
            <div className="absolute flex h-[261.055px] items-center justify-center right-[-38.6px] top-[calc(50%+0.29px)] translate-y-[-50%] w-[274.595px]">
              <div className="flex-none rotate-[252.348deg] scale-y-[-100%]">
                <div className="border-[0.675px] border-[var(--colors\/outline\/02,#172330)] border-solid h-[223.632px] relative rounded-[1012.361px] w-[202.79px]" data-name="illustration" data-node-id="I132:1958;132:1827">
                  <div className="absolute bg-[var(--colors\/surface\/02,#081016)] border-[0.54px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid left-[calc(50%+52.4px)] opacity-30 overflow-clip rounded-[364.45px] size-[139.307px] top-[calc(50%+49.38px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I132:1958;132:1828">
                    <div className="absolute flex items-center justify-center left-[-11.61px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1829">
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-2.84px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1830">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.94px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1831">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-11.98px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1832">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-3.2px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1833">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.57px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1834">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-11.92px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1835">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-3.15px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1836">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.62px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1837">
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute content-start flex flex-wrap gap-[13px_14.071px] items-start left-[calc(50%+-0.7px)] top-[calc(50%+-0.7px)] translate-x-[-50%] translate-y-[-50%] w-[92.871px]" data-node-id="I132:1958;132:1838">
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I132:1958;132:1839">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img2} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I132:1958;132:1858">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img3} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I132:1958;132:1877">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img4} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[46.607px] items-center justify-center left-[57.15px] top-[57.15px] w-[45.37px]">
                      <div className="flex-none rotate-[225.77deg]">
                        <div className="h-0 relative w-[65.043px]" data-node-id="I132:1958;132:1896">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img5} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[34.79px] items-center justify-center left-[99.37px] top-[59.97px] w-[15.154px]">
                      <div className="flex-none rotate-[246.463deg]">
                        <div className="h-0 relative w-[37.947px]" data-node-id="I132:1958;132:1897">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img6} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[16.801px] items-center justify-center left-[62.78px] top-[97.96px] w-[31.744px]">
                      <div className="flex-none rotate-[207.891deg]">
                        <div className="h-0 relative w-[35.916px]" data-node-id="I132:1958;132:1898">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img7} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center right-[-37.93px] size-[59.1px] top-[185.85px]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="relative size-[59.1px]" data-node-id="I132:1958;132:1899">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img8} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-[103.88px] size-[43.194px] top-[calc(50%+-80.37px)] translate-y-[-50%]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I132:1958;132:1918">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I132:1958;132:1919">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1920" />
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1921">
                            <img alt="" className="block max-w-none size-full" src={img9} />
                          </div>
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1924">
                            <img alt="" className="block max-w-none size-full" src={img10} />
                          </div>
                          <div className="relative shrink-0 size-[4.322px]" data-node-id="I132:1958;132:1927">
                            <img alt="" className="block max-w-none size-full" src={img11} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[139.36px] flex items-center justify-center left-[calc(50%+-40.47px)] size-[61.086px] translate-x-[-50%]">
                    <div className="flex-none rotate-[135deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I132:1958;132:1929">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I132:1958;132:1930">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1931" />
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1932">
                            <img alt="" className="block max-w-none size-full" src={img12} />
                          </div>
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1935">
                            <img alt="" className="block max-w-none size-full" src={img13} />
                          </div>
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1938" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[81.26px] flex items-center justify-center left-[calc(50%+-68.11px)] size-[43.194px] translate-x-[-50%]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I132:1958;132:1939">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I132:1958;132:1940">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1941" />
                          <div className="h-[21.065px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1942">
                            <img alt="" className="block max-w-none size-full" src={img14} />
                          </div>
                          <div className="h-[29.437px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1946">
                            <img alt="" className="block max-w-none size-full" src={img15} />
                          </div>
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1951" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[42.788px] items-center justify-center left-[calc(50%+-19.9px)] top-[131.19px] translate-x-[-50%] w-[54.609px]">
                    <div className="flex-none rotate-[38.08deg]">
                      <div className="h-0 relative w-[69.376px]" data-node-id="I132:1958;132:1952">
                        <div className="absolute inset-[-0.27px_-0.39%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img16} width="69.916" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[45.69px] items-center justify-center left-[calc(50%+-6.71px)] top-[71.09px] translate-x-[-50%] w-[37.401px]">
                    <div className="flex-none rotate-[50.696deg]">
                      <div className="h-0 relative w-[59.046px]" data-node-id="I132:1958;132:1953">
                        <div className="absolute inset-[-0.27px_-0.46%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img17} width="59.586" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[62.978px] items-center justify-center left-[calc(50%+52.64px)] top-[51.39px] translate-x-[-50%] w-[35.094px]">
                    <div className="flex-none rotate-[60.871deg]">
                      <div className="h-0 relative w-[72.095px]" data-node-id="I132:1958;132:1954">
                        <div className="absolute inset-[-0.27px_-0.37%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img18} width="72.635" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {isHover &&
        (ilustration || (
          <div className="absolute overflow-clip right-[-75px] size-[262px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="illustration" data-node-id="252:3023">
            <div className="absolute flex h-[261.055px] items-center justify-center right-[-38.6px] top-[calc(50%+0.29px)] translate-y-[-50%] w-[274.595px]">
              <div className="flex-none rotate-[252.348deg] scale-y-[-100%]">
                <div className="border-[0.675px] border-[var(--colors\/outline\/03,#3f3f46)] border-solid h-[223.632px] relative rounded-[1012.361px] w-[202.79px]" data-name="illustration" data-node-id="I252:3023;132:1827">
                  <div className="absolute bg-[var(--colors\/surface\/02,#081016)] border-[0.54px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid left-[calc(50%+52.4px)] opacity-30 overflow-clip rounded-[364.45px] size-[139.307px] top-[calc(50%+49.38px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I252:3023;132:1828">
                    <div className="absolute flex items-center justify-center left-[-11.61px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1829">
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-2.84px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1830">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.94px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1831">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-11.98px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1832">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-3.2px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1833">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.57px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1834">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-11.92px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1835">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-3.15px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1836">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.62px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1837">
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute content-start flex flex-wrap gap-[13px_14.071px] items-start left-[calc(50%+-0.7px)] top-[calc(50%+-0.7px)] translate-x-[-50%] translate-y-[-50%] w-[92.871px]" data-node-id="I252:3023;132:1838">
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I252:3023;132:1839">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img2} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I252:3023;132:1858">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img3} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I252:3023;132:1877">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img4} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[46.607px] items-center justify-center left-[57.15px] top-[57.15px] w-[45.37px]">
                      <div className="flex-none rotate-[225.77deg]">
                        <div className="h-0 relative w-[65.043px]" data-node-id="I252:3023;132:1896">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img5} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[34.79px] items-center justify-center left-[99.37px] top-[59.97px] w-[15.154px]">
                      <div className="flex-none rotate-[246.463deg]">
                        <div className="h-0 relative w-[37.947px]" data-node-id="I252:3023;132:1897">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img6} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[16.801px] items-center justify-center left-[62.78px] top-[97.96px] w-[31.744px]">
                      <div className="flex-none rotate-[207.891deg]">
                        <div className="h-0 relative w-[35.916px]" data-node-id="I252:3023;132:1898">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img7} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center right-[-37.93px] size-[59.1px] top-[185.85px]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="relative size-[59.1px]" data-node-id="I252:3023;132:1899">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img8} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-[103.88px] size-[43.194px] top-[calc(50%+-80.37px)] translate-y-[-50%]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I252:3023;132:1918">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I252:3023;132:1919">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1920" />
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1921">
                            <img alt="" className="block max-w-none size-full" src={img9} />
                          </div>
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1924">
                            <img alt="" className="block max-w-none size-full" src={img10} />
                          </div>
                          <div className="relative shrink-0 size-[4.322px]" data-node-id="I252:3023;132:1927">
                            <img alt="" className="block max-w-none size-full" src={img11} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[139.36px] flex items-center justify-center left-[calc(50%+-40.47px)] size-[61.086px] translate-x-[-50%]">
                    <div className="flex-none rotate-[135deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I252:3023;132:1929">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I252:3023;132:1930">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1931" />
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1932">
                            <img alt="" className="block max-w-none size-full" src={img12} />
                          </div>
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1935">
                            <img alt="" className="block max-w-none size-full" src={img13} />
                          </div>
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1938" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[81.26px] flex items-center justify-center left-[calc(50%+-68.11px)] size-[43.194px] translate-x-[-50%]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I252:3023;132:1939">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I252:3023;132:1940">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1941" />
                          <div className="h-[21.065px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1942">
                            <img alt="" className="block max-w-none size-full" src={img14} />
                          </div>
                          <div className="h-[29.437px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1946">
                            <img alt="" className="block max-w-none size-full" src={img15} />
                          </div>
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1951" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[42.788px] items-center justify-center left-[calc(50%+-19.9px)] top-[131.19px] translate-x-[-50%] w-[54.609px]">
                    <div className="flex-none rotate-[38.08deg]">
                      <div className="h-0 relative w-[69.376px]" data-node-id="I252:3023;132:1952">
                        <div className="absolute inset-[-0.27px_-0.39%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img16} width="69.916" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[45.69px] items-center justify-center left-[calc(50%+-6.71px)] top-[71.09px] translate-x-[-50%] w-[37.401px]">
                    <div className="flex-none rotate-[50.696deg]">
                      <div className="h-0 relative w-[59.046px]" data-node-id="I252:3023;132:1953">
                        <div className="absolute inset-[-0.27px_-0.46%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img17} width="59.586" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[62.978px] items-center justify-center left-[calc(50%+52.64px)] top-[51.39px] translate-x-[-50%] w-[35.094px]">
                    <div className="flex-none rotate-[60.871deg]">
                      <div className="h-0 relative w-[72.095px]" data-node-id="I252:3023;132:1954">
                        <div className="absolute inset-[-0.27px_-0.37%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img18} width="72.635" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/label/sm: Font(family: "label/sm/font-family", style: label/sm/font-weight, size: label/sm/font-size, weight: 600, lineHeight: label/sm/line-height, letterSpacing: tracking/global/label-sm), typography/heading/lg: Font(family: "heading/lg/font-family", style: heading/lg/font-weight, size: heading/lg/font-size, weight: 600, lineHeight: heading/lg/line-height, letterSpacing: tracking/heading/heading-lg), typography/body/sm: Font(family: "body/sm/font-family", style: body/sm/font-weight, size: body/sm/font-size, weight: 400, lineHeight: body/sm/line-height, letterSpacing: tracking/global/body-sm), typography/label/md: Font(family: "label/md/font-family", style: label/md/font-weight, size: label/md/font-size, weight: 600, lineHeight: label/md/line-height, letterSpacing: tracking/global/label-md).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `252:3015`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a large Card component with two states: default and hover. It features a category label, title, text, button with arrow, and a network illustration on the right side. Let me create clean HTML + CSS code for you.
card-lg.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Large Component</title>
  <link rel="stylesheet" href="card-lg.css">
</head>
<body>
  <!-- Card Large - Default State -->
  <div class="card-lg">
    <span class="card-lg__category">Technology</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Title</h2>
        <p class="card-lg__description">text</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">button</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Network Illustration -->
    <div class="card-lg__illustration">
      <svg class="card-lg__illustration-svg" viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Network nodes -->
        <g transform="translate(131, 131)">
          <!-- Center circle -->
          <circle cx="0" cy="0" r="30" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.3"/>
          
          <!-- Top node -->
          <circle cx="0" cy="-70" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="0" y1="-50" x2="0" y2="-30" stroke="#C987D9" stroke-width="0.5"/>
          
          <!-- Right node -->
          <circle cx="60" cy="-35" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="50" y1="-25" x2="25" y2="-15" stroke="#C987D9" stroke-width="0.5"/>
          
          <!-- Bottom right node -->
          <circle cx="50" cy="50" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="35" y1="40" x2="20" y2="20" stroke="#C987D9" stroke-width="0.5"/>
          
          <!-- Bottom left node -->
          <circle cx="-50" cy="50" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="-35" y1="40" x2="-20" y2="20" stroke="#C987D9" stroke-width="0.5"/>
          
          <!-- Left node -->
          <circle cx="-70" cy="0" r="25" stroke="#C987D9" stroke-width="1" fill="rgba(4, 7, 11, 1)"/>
          <line x1="-45" y1="0" x2="-30" y2="0" stroke="#C987D9" stroke-width="0.5"/>
          
          <!-- Small dots in center -->
          <circle cx="-8" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="0" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="8" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="-8" cy="5" r="2.5" fill="#C987D9"/>
          <circle cx="0" cy="5" r="2.5" fill="#C987D9"/>
          <circle cx="8" cy="5" r="2.5" fill="#C987D9"/>
        </g>
        
        <!-- Outer ellipse -->
        <ellipse cx="131" cy="131" rx="101" ry="112" stroke="#172330" stroke-width="1" fill="none" opacity="0.5"/>
      </svg>
    </div>
  </div>

  <!-- Card Large - Hover State -->
  <div class="card-lg card-lg--hover">
    <span class="card-lg__category">Technology</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Title</h2>
        <p class="card-lg__description">text</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">button</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Network Illustration -->
    <div class="card-lg__illustration">
      <svg class="card-lg__illustration-svg" viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(131, 131)">
          <circle cx="0" cy="0" r="30" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.3"/>
          <circle cx="0" cy="-70" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="0" y1="-50" x2="0" y2="-30" stroke="#C987D9" stroke-width="0.5"/>
          <circle cx="60" cy="-35" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="50" y1="-25" x2="25" y2="-15" stroke="#C987D9" stroke-width="0.5"/>
          <circle cx="50" cy="50" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="35" y1="40" x2="20" y2="20" stroke="#C987D9" stroke-width="0.5"/>
          <circle cx="-50" cy="50" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="-35" y1="40" x2="-20" y2="20" stroke="#C987D9" stroke-width="0.5"/>
          <circle cx="-70" cy="0" r="25" stroke="#C987D9" stroke-width="1" fill="rgba(4, 7, 11, 1)"/>
          <line x1="-45" y1="0" x2="-30" y2="0" stroke="#C987D9" stroke-width="0.5"/>
          <circle cx="-8" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="0" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="8" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="-8" cy="5" r="2.5" fill="#C987D9"/>
          <circle cx="0" cy="5" r="2.5" fill="#C987D9"/>
          <circle cx="8" cy="5" r="2.5" fill="#C987D9"/>
        </g>
        <ellipse cx="131" cy="131" rx="101" ry="112" stroke="#3f3f46" stroke-width="1" fill="none" opacity="0.5"/>
      </svg>
    </div>
  </div>
</body>
</html>
card-lg.css
css/* Base Card Large Styles */
.card-lg {
  background: linear-gradient(to right, #f9fafb, #f9fafb);
  border: 1px solid #a1a1aa;
  display: flex;
  flex-direction: column;
  gap: 80px;
  height: 395px;
  padding: 24px;
  border-radius: 32px;
  width: 629px;
  overflow: hidden;
  position: relative;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

/* Hover State */
.card-lg--hover,
.card-lg:hover {
  background: linear-gradient(to right, #e5e7eb, #e5e7eb);
}

/* Category Label */
.card-lg__category {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #ad4fc4;
  flex-shrink: 0;
}

/* Content Container */
.card-lg__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  width: 387px;
  padding-bottom: 24px;
  min-height: 0;
  flex-shrink: 0;
}

/* Text Section */
.card-lg__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  white-space: pre-wrap;
  flex-shrink: 0;
}

/* Title */
.card-lg__title {
  font-family: 'Sora', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -1px;
  color: #04070b;
  margin: 0;
  width: 100%;
}

/* Description */
.card-lg__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #172330;
  margin: 0;
  width: 100%;
}

/* Button */
.card-lg__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 4px;
  border-radius: 16px;
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.2s ease;
}

.card-lg__button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.card-lg__button-text {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #04070b;
  padding: 0 8px;
  transition: color 0.2s ease;
}

.card-lg--hover .card-lg__button-text,
.card-lg:hover .card-lg__button-text {
  color: #003d7a;
}

.card-lg__button-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: #04070b;
  transition: color 0.2s ease;
}

.card-lg--hover .card-lg__button-icon,
.card-lg:hover .card-lg__button-icon {
  color: #003d7a;
}

/* Illustration */
.card-lg__illustration {
  position: absolute;
  right: -75px;
  top: 50%;
  transform: translateY(-50%);
  width: 262px;
  height: 262px;
  overflow: hidden;
  pointer-events: none;
}

.card-lg__illustration-svg {
  width: 100%;
  height: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-lg {
    width: 100%;
    max-width: 629px;
    height: auto;
    min-height: 395px;
  }
  
  .card-lg__content {
    width: 100%;
    max-width: 387px;
  }
  
  .card-lg__illustration {
    right: -100px;
    opacity: 0.5;
  }
}

@media (max-width: 480px) {
  .card-lg__illustration {
    display: none;
  }
}

/* Dark theme variant (optional) */
.card-lg--dark {
  background: linear-gradient(to right, #0e1820, #0e1820);
  border-color: #3f3f46;
}

.card-lg--dark:hover,
.card-lg--dark.card-lg--hover {
  background: linear-gradient(to right, #172330, #172330);
}

.card-lg--dark .card-lg__title {
  color: #fafafa;
}

.card-lg--dark .card-lg__description {
  color: #d4d4d8;
}

.card-lg--dark .card-lg__button-text,
.card-lg--dark .card-lg__button-icon {
  color: #fafafa;
}

.card-lg--dark:hover .card-lg__button-text,
.card-lg--dark.card-lg--hover .card-lg__button-text,
.card-lg--dark:hover .card-lg__button-icon,
.card-lg--dark.card-lg--hover .card-lg__button-icon {
  color: #60a5fa;
}

/* Animation for button hover */
.card-lg__button:hover .card-lg__button-icon {
  transform: translateX(4px);
}
Usage Examples:
1. Default Card:
html<div class="card-lg">
  <span class="card-lg__category">Technology</span>
  <div class="card-lg__content">
    <div class="card-lg__text">
      <h2 class="card-lg__title">Decentralized Network</h2>
      <p class="card-lg__description">Built on blockchain technology for maximum security and privacy.</p>
    </div>
    <button class="card-lg__button">
      <span class="card-lg__button-text">Learn More</span>
      <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
  <div class="card-lg__illustration">
    <!-- SVG illustration -->
  </div>
</div>
2. Dark Theme Card:
html<div class="card-lg card-lg--dark">
  <!-- Same content as above -->
</div>
3. Hover State (for testing):
html<div class="card-lg card-lg--hover">
  <!-- Same content as above -->
</div>
Key Features:

✅ Two states: Default and hover with background color change
✅ Fixed dimensions: 629px × 395px
✅ Network illustration: Positioned on right side, overflows the card
✅ Interactive button: Changes color on hover with arrow icon
✅ Typography: Uses Sora for heading, Inter for body text
✅ Responsive: Adapts to smaller screens
✅ Dark theme variant: Optional dark mode styling
✅ Smooth transitions: All hover effects are animated

Required Fonts:
html<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Sora:wght@600&display=swap" rel="stylesheet">
Note: The illustration SVG is simplified for clarity. You can replace it with the actual network illustration from your design assets or customize it further to match your exact needs!DImplement this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=252-3015&m=devDO this again, I swapped the illustration for a png image.Get design contextRequest{
  `nodeId`: `252:3015`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst imgOutlines3 = "https://www.figma.com/api/mcp/asset/2fd85541-8ac4-4953-a875-f7e5b5d0a802";
const imgColor2 = "https://www.figma.com/api/mcp/asset/5b58f14e-72ba-49d8-b09e-b874c47cc641";
const imgColor1 = "https://www.figma.com/api/mcp/asset/6f631225-2078-4ece-a7a7-30236e077399";
const imgOutlines = "https://www.figma.com/api/mcp/asset/012d171e-1117-47bf-92f8-6bbd3b57c153";
const imgOutlines1 = "https://www.figma.com/api/mcp/asset/1d9a28f6-2f4f-4e54-9a60-d0c9c6b3f87b";
const imgOutlines2 = "https://www.figma.com/api/mcp/asset/456a50c8-d139-4cfa-8fe0-227ed32a916b";
type IllustrationProps = {
  className?: string;
  property1?: "apps" | "chats" | "privacy" | "wallet" | "Variant6" | "business";
};

function Illustration({ className, property1 = "chats" }: IllustrationProps) {
  return (
    <div data-node-id="85:2187" className={className}>
      <div data-node-id="85:2188" className="absolute contents inset-[8.34%_2.74%_8.34%_2.75%]" data-name="Product-Newsletter-01">
        <div data-node-id="85:2189" className="absolute inset-[8.34%_21.87%_24.33%_30.84%]" data-name="color 2">
          <img className="block max-w-none size-full" alt="" src={imgColor2} />
        </div>
        <div data-node-id="85:2195" className="absolute inset-[24.31%_6.72%_9.3%_15.89%]" data-name="color 1">
          <img className="block max-w-none size-full" alt="" src={imgColor1} />
        </div>
        <div data-node-id="85:2203" className="absolute inset-[8.34%_2.74%_8.34%_2.75%]" data-name="outlines">
          <div className="absolute inset-[-0.3%_-0.26%]">
            <img className="block max-w-none size-full" alt="" src={imgOutlines} />
          </div>
        </div>
      </div>
    </div>
  );
}
type CardlgProps = {
  state?: "default" | "hover";
};

export default function Cardlg({ state = "default" }: CardlgProps) {
  const isDefault = state === "default";
  const isHover = state === "hover";
  return (
    <div id={isDefault ? "node-132_2088" : isHover ? "node-252_3016" : ""} className={`bg-gradient-to-r border border-[var(--colors\/outline\/02,#a1a1aa)] border-solid content-stretch flex flex-col gap-[var(--spacing\/super-lg,80px)] h-[395px] items-start overflow-clip p-[var(--spacing\/xl,24px)] relative rounded-[var(--corner-radius\/xxl,32px)] w-[629px] ${isDefault ? "from-[#f9fafb] to-[#f9fafb]" : isHover ? "from-[#e5e7eb] to-[#e5e7eb]" : ""}`}>
      <p id={isDefault ? "node-132_1556" : isHover ? "node-252_3017" : ""} className={`font-[family-name:var(--label\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/sm\\/font-weight,normal)] leading-[var(--label\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/accent,#ad4fc4)] text-[length:var(--label\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/label-sm,-0.5px)]`}>
        Technology
      </p>
      <div id={isDefault ? "node-132_1557" : isHover ? "node-252_3018" : ""} className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px pb-[var(--spacing\\/xl,24px)] pt-0 px-0 relative shrink-0 w-[387px]" data-name="content">
        <div id={isDefault ? "node-132_1558" : isHover ? "node-252_3019" : ""} className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="text">
          <p id={isDefault ? "node-132_1559" : isHover ? "node-252_3020" : ""} className={`font-[family-name:var(--heading\\/lg\\/font-family,"Sora:semibold",sans-serif)] font-[var(--heading\\/lg\\/font-weight,normal)] leading-[var(--heading\\/lg\\/line-height,44px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#04070b)] text-[length:var(--heading\\/lg\\/font-size,32px)] tracking-[var(--tracking\\/heading\\/heading-lg,-1px)] w-full`}>
            Title
          </p>
          <p id={isDefault ? "node-132_1560" : isHover ? "node-252_3021" : ""} className={`font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#172330)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] w-full`}>
            text
          </p>
        </div>
        <div id={isDefault ? "node-132_1561" : isHover ? "node-252_3022" : ""} className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
          <div id={isDefault ? "node-I132_1561-53_211" : isHover ? "node-I252_3022-53_211" : ""} className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
            <p id={isDefault ? "node-I132_1561-53_212" : isHover ? "node-I252_3022-53_212" : ""} className={`font-[family-name:var(--label\/md\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\/md\/font-weight,normal)] leading-[var(--label\/md\/line-height,24px)] relative shrink-0 text-[length:var(--label\/md\/font-size,16px)] tracking-[var(--tracking\/global\/label-md,-0.5px)] ${isDefault ? "text-[color:var(--colors\/text\/01,#04070b)]" : isHover ? "text-[color:var(--colors\/text\/action\/default,#003d7a)]" : ""}`}>
              button
            </p>
          </div>
          <div id={isDefault ? "node-I132_1561-53_508" : isHover ? "node-I252_3022-53_508" : ""} className="overflow-clip relative shrink-0 size-[24px]" data-name="type=regular">
            <div id={isDefault ? "node-I132_1561-53_508-71_1171" : isHover ? "node-I252_3022-53_508-71_1171" : ""} className="absolute inset-[18.75%_12.5%]" data-name="icon">
              <div className="absolute inset-0" style={(isDefault ? { "--fill-0": "rgba(4, 7, 11, 1)" } : isHover ? { "--fill-0": "rgba(0, 61, 122, 1)" } : undefined) as React.CSSProperties}>
                <img className="block max-w-none size-full" alt="" src={isDefault ? imgOutlines1 : isHover ? imgOutlines2 : ""} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={isDefault ? "node-255_6633" : isHover ? "node-255_6641" : ""} className="absolute right-[-75px] size-[262px] top-[calc(50%+-0.5px)] translate-y-[-50%]" data-name="illustration-tech 1">
        <img className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" alt="" src={imgOutlines3} />
      </div>
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/label/sm: Font(family: "label/sm/font-family", style: label/sm/font-weight, size: label/sm/font-size, weight: 600, lineHeight: label/sm/line-height, letterSpacing: tracking/global/label-sm), typography/heading/lg: Font(family: "heading/lg/font-family", style: heading/lg/font-weight, size: heading/lg/font-size, weight: 600, lineHeight: heading/lg/line-height, letterSpacing: tracking/heading/heading-lg), typography/body/sm: Font(family: "body/sm/font-family", style: body/sm/font-weight, size: body/sm/font-size, weight: 400, lineHeight: body/sm/line-height, letterSpacing: tracking/global/body-sm), typography/label/md: Font(family: "label/md/font-family", style: label/md/font-weight, size: label/md/font-size, weight: 600, lineHeight: label/md/line-height, letterSpacing: tracking/global/label-md).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `252:3015`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! Now I can see the component uses a PNG image for the illustration. Let me create the updated HTML + CSS code with the PNG image support.
card-lg.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Large Component</title>
  <link rel="stylesheet" href="card-lg.css">
</head>
<body>
  <!-- Card Large - Default State -->
  <div class="card-lg">
    <span class="card-lg__category">Technology</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Title</h2>
        <p class="card-lg__description">text</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">button</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Illustration Image -->
    <div class="card-lg__illustration">
      <img src="illustration-tech.png" alt="Network Illustration" class="card-lg__illustration-img">
    </div>
  </div>

  <!-- Card Large - Hover State -->
  <div class="card-lg card-lg--hover">
    <span class="card-lg__category">Technology</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Title</h2>
        <p class="card-lg__description">text</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">button</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Illustration Image -->
    <div class="card-lg__illustration">
      <img src="illustration-tech.png" alt="Network Illustration" class="card-lg__illustration-img">
    </div>
  </div>

  <!-- Example with different content -->
  <div class="card-lg">
    <span class="card-lg__category">Security</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Decentralized Network</h2>
        <p class="card-lg__description">Built on blockchain technology for maximum security and privacy</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">Learn More</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <div class="card-lg__illustration">
      <img src="illustration-tech.png" alt="Network Illustration" class="card-lg__illustration-img">
    </div>
  </div>
</body>
</html>
card-lg.css
css/* Base Card Large Styles */
.card-lg {
  background: linear-gradient(to right, #f9fafb, #f9fafb);
  border: 1px solid #a1a1aa;
  display: flex;
  flex-direction: column;
  gap: 80px;
  height: 395px;
  padding: 24px;
  border-radius: 32px;
  width: 629px;
  overflow: hidden;
  position: relative;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

/* Hover State */
.card-lg--hover,
.card-lg:hover {
  background: linear-gradient(to right, #e5e7eb, #e5e7eb);
}

/* Category Label */
.card-lg__category {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #ad4fc4;
  flex-shrink: 0;
  z-index: 2;
  position: relative;
}

/* Content Container */
.card-lg__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  width: 387px;
  padding-bottom: 24px;
  min-height: 0;
  flex-shrink: 0;
  z-index: 2;
  position: relative;
}

/* Text Section */
.card-lg__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  white-space: pre-wrap;
  flex-shrink: 0;
}

/* Title */
.card-lg__title {
  font-family: 'Sora', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -1px;
  color: #04070b;
  margin: 0;
  width: 100%;
}

/* Description */
.card-lg__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #172330;
  margin: 0;
  width: 100%;
}

/* Button */
.card-lg__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 4px;
  border-radius: 16px;
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.2s ease;
}

.card-lg__button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.card-lg__button-text {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #04070b;
  padding: 0 8px;
  transition: color 0.2s ease;
}

.card-lg--hover .card-lg__button-text,
.card-lg:hover .card-lg__button-text {
  color: #003d7a;
}

.card-lg__button-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: #04070b;
  transition: all 0.2s ease;
}

.card-lg--hover .card-lg__button-icon,
.card-lg:hover .card-lg__button-icon {
  color: #003d7a;
}

.card-lg__button:hover .card-lg__button-icon {
  transform: translateX(4px);
}

/* Illustration Container */
.card-lg__illustration {
  position: absolute;
  right: -75px;
  top: 50%;
  transform: translateY(-50%);
  width: 262px;
  height: 262px;
  overflow: visible;
  pointer-events: none;
  z-index: 1;
}

/* Illustration Image */
.card-lg__illustration-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  pointer-events: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-lg {
    width: 100%;
    max-width: 629px;
    height: auto;
    min-height: 395px;
  }
  
  .card-lg__content {
    width: 100%;
    max-width: 387px;
  }
  
  .card-lg__illustration {
    right: -100px;
    opacity: 0.5;
  }
}

@media (max-width: 480px) {
  .card-lg {
    gap: 40px;
  }
  
  .card-lg__illustration {
    right: -120px;
    opacity: 0.3;
    width: 200px;
    height: 200px;
  }
}

/* Dark theme variant (optional) */
.card-lg--dark {
  background: linear-gradient(to right, #0e1820, #0e1820);
  border-color: #3f3f46;
}

.card-lg--dark:hover,
.card-lg--dark.card-lg--hover {
  background: linear-gradient(to right, #172330, #172330);
}

.card-lg--dark .card-lg__title {
  color: #fafafa;
}

.card-lg--dark .card-lg__description {
  color: #d4d4d8;
}

.card-lg--dark .card-lg__button-text,
.card-lg--dark .card-lg__button-icon {
  color: #fafafa;
}

.card-lg--dark:hover .card-lg__button-text,
.card-lg--dark.card-lg--hover .card-lg__button-text,
.card-lg--dark:hover .card-lg__button-icon,
.card-lg--dark.card-lg--hover .card-lg__button-icon {
  color: #60a5fa;
}

/* Grid layout helper (for multiple cards) */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(629px, 1fr));
  gap: 24px;
  padding: 24px;
}

@media (max-width: 680px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}


Usage Examples:
1. Basic Card with PNG Illustration:
html<div class="card-lg">
  <span class="card-lg__category">Technology</span>
  <div class="card-lg__content">
    <div class="card-lg__text">
      <h2 class="card-lg__title">Decentralized Network</h2>
      <p class="card-lg__description">Built on blockchain technology for maximum security and privacy.</p>
    </div>
    <button class="card-lg__button">
      <span class="card-lg__button-text">Learn More</span>
      <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
  <div class="card-lg__illustration">
    <img src="your-illustration.png" alt="Illustration" class="card-lg__illustration-img">
  </div>
</div>

2. Dark Theme Card:
ChatsProjectsArtifactsRecentsHideCreating Figma component codeBuilding Spixi app directory webpageContinuing previous workResponsive page with design tokensImplement Spixi website designConverting Figma design to websiteDdamirPro planCreating Figma component codeDhey bro, I will give you a link to figma, so you can create a new component code, which I will paste in claude code to add to my project. Is that ok?Hey! Yeah, that sounds great! I can help you generate code from a Figma design. Just share the Figma link with me and I'll:

Extract the design from Figma
Generate the component code for you
Make sure it's ready to drop into your project via Claude Code

Go ahead and paste the link whenever you're ready. If you can also let me know what framework/language you're using (React, Vue, plain HTML/CSS, etc.), that'll help me generate the most appropriate code for your project!Dchecking all props and variants - create me a copy/paste code for claude code
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=244-1029&m=devI'll fetch the Figma design and generate the code for you.Get design contextRequest{
  `nodeId`: `244:1029`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `unknown`,
  `clientFrameworks`: `unknown`
}Responsetype ChipProps = {
  text?: string;
  state?: "selected" | "default";
};

export default function Chip({ text = "Label", state = "selected" }: ChipProps) {
  const isDefault = state === "default";
  const isSelected = state === "selected";
  return (
    <div id={isSelected ? "node-244_1030" : isDefault ? "node-244_1032" : ""} className={`content-stretch flex items-center justify-center overflow-clip px-[var(--spacing\/sm,12px)] py-[var(--spacing\/xxs,4px)] relative rounded-[30px] ${isSelected ? "bg-[var(--colors\/surface\/accent,#c987d9)]" : isDefault ? "border border-[var(--colors\/outline\/03,#3f3f46)] border-solid" : ""}`}>
      {isSelected && (
        <div className="flex flex-col font-[family-name:var(--label\/sm\/font-family,'Inter:semibold',sans-serif)] font-[var(--label\/sm\/font-weight,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--colors\/text\/inverse-01,#04070b)] text-[length:var(--label\/sm\/font-size,14px)] text-center tracking-[var(--tracking\/global\/label-sm,-0.5px)] whitespace-nowrap" data-node-id="244:1031">
          <p className="leading-[var(--label\/sm\/line-height,20px)]">{text}</p>
        </div>
      )}
      {isDefault && (
        <div className="flex flex-col font-[family-name:var(--label\/sm\/font-family,'Inter:semibold',sans-serif)] font-[var(--label\/sm\/font-weight,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--colors\/text\/02,#d4d4d8)] text-[length:var(--label\/sm\/font-size,14px)] text-center tracking-[var(--tracking\/global\/label-sm,-0.5px)] whitespace-nowrap" data-node-id="244:1033">
          <p className="leading-[var(--label\/sm\/line-height,20px)]">{text}</p>
        </div>
      )}
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/label/sm: Font(family: "label/sm/font-family", style: label/sm/font-weight, size: label/sm/font-size, weight: 600, lineHeight: label/sm/line-height, letterSpacing: tracking/global/label-sm).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `244:1029`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `unknown`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a Chip component with two states: selected (purple/accent background) and default (with border outline).
Here's the clean, copy-paste ready React + Tailwind component code for you:
tsxtype ChipProps = {
  text?: string;
  state?: "selected" | "default";
};

export default function Chip({ text = "Label", state = "selected" }: ChipProps) {
  const isDefault = state === "default";
  const isSelected = state === "selected";
  
  return (
    <div 
      className={`
        inline-flex items-center justify-center 
        px-3 py-1 
        rounded-full
        ${isSelected ? "bg-[#c987d9]" : ""}
        ${isDefault ? "border border-[#3f3f46]" : ""}
      `}
    >
      <span 
        className={`
          text-sm font-semibold 
          tracking-tight
          whitespace-nowrap
          ${isSelected ? "text-[#04070b]" : "text-[#d4d4d8]"}
        `}
      >
        {text}
      </span>
    </div>
  );
}
Usage:
tsx// Selected state (purple background)
<Chip text="Label" state="selected" />

// Default state (outlined)
<Chip text="Label" state="default" />
The component has:

✅ Two variants: selected and default
✅ Dynamic text prop
✅ Proper styling with appropriate colors from your design system
✅ Clean, minimal Tailwind classes
✅ TypeScript types included

Just paste this into your Claude Code project and you're good to go! Let me know if you need any adjustments.DI need HTML CSS codeGot it! Here's the HTML + CSS version for you:
chip.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chip Component</title>
  <link rel="stylesheet" href="chip.css">
</head>
<body>
  <!-- Selected state -->
  <div class="chip chip--selected">
    <span class="chip__text">Label</span>
  </div>

  <!-- Default state -->
  <div class="chip chip--default">
    <span class="chip__text">Label</span>
  </div>
</body>
</html>
chip.css
css.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 30px;
  overflow: hidden;
}

.chip--selected {
  background-color: #c987d9;
}

.chip--default {
  border: 1px solid #3f3f46;
  background-color: transparent;
}

.chip__text {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  white-space: nowrap;
  text-align: center;
}

.chip--selected .chip__text {
  color: #04070b;
}

.chip--default .chip__text {
  color: #d4d4d8;
}
Usage:
html<!-- Selected chip -->
<div class="chip chip--selected">
  <span class="chip__text">Your Text</span>
</div>

<!-- Default chip -->
<div class="chip chip--default">
  <span class="chip__text">Your Text</span>
</div>
Note: Make sure to include the Inter font in your project. You can add this to the <head> of your HTML:
html<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet">
This is clean, semantic HTML/CSS that you can drop right into your project!DDo the same for this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=242-2035&m=devGet design contextRequest{
  `nodeId`: `242:2035`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst imgAppImage = "https://www.figma.com/api/mcp/asset/da7fb9a4-b6ba-406f-a62e-2def7c509dc6";
const imgIcon = "https://www.figma.com/api/mcp/asset/ab6a49e4-5868-4996-a0ef-7ea3dbed6077";
const imgQrCode = "https://www.figma.com/api/mcp/asset/39152c77-d4db-4d69-ac0a-30cad888db22";
type CopySimpleProps = {
  className?: string;
  type?: "light";
};

function CopySimple({ className, type = "light" }: CopySimpleProps) {
  return (
    <div data-node-id="196:1914" className={className}>
      <div data-node-id="196:1909" className="absolute inset-[13.28%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" alt="" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}
type ModalProps = {
  property1?: "desktop" | "mobile";
};

export default function Modal({ property1 = "desktop" }: ModalProps) {
  const isDesktop = property1 === "desktop";
  const isMobile = property1 === "mobile";
  return (
    <div id={isDesktop ? "node-242_2033" : isMobile ? "node-242_2034" : ""} className={`bg-[var(--colors\/surface\/01,#04070b)] content-stretch flex flex-col items-center p-[var(--spacing\/none,0px)] relative rounded-[var(--corner-radius\/xxl,32px)] ${isDesktop ? "gap-[var(--spacing\/xl,24px)] w-[760px]" : isMobile ? "gap-[var(--spacing\/none,0px)]" : ""}`}>
      {isDesktop && (
        <div data-node-id="238:1203" className="content-stretch flex gap-[var(--spacing\\/xl,24px)] items-center p-[var(--spacing\\/xl,24px)] relative rounded-tl-[var(--corner-radius\\/lg\\+,20px)] rounded-tr-[var(--corner-radius\\/lg\\+,20px)] shrink-0 w-full" data-name="row">
          <div data-node-id="238:1204" className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="img">
            <div data-node-id="238:1205" className="border border-[var(--colors\\/outline\\/03,#3f3f46)] border-solid relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 size-[96px]" data-name="app-image">
              <img className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" alt="" src={imgAppImage} />
            </div>
          </div>
          <div data-node-id="238:1206" className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\\/xs,8px)] items-start min-h-px min-w-px relative shrink-0" data-name="details">
            <div data-node-id="238:1207" className="content-stretch flex flex-col gap-[var(--spacing\\/xxs,4px)] items-start relative shrink-0 w-full" data-name="meta">
              <div data-node-id="238:1208" className="content-stretch flex gap-[var(--spacing\\/sm,12px)] items-center relative shrink-0 w-full" data-name="row">
                <p data-node-id="238:1209" className={`font-[family-name:var(--heading\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--heading\\/sm\\/font-weight,normal)] leading-[var(--heading\\/sm\\/line-height,28px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#fafafa)] text-[length:var(--heading\\/sm\\/font-size,20px)] tracking-[var(--tracking\\/heading\\/heading-sm,-0.5px)]`}>
                  Title
                </p>
                <div data-node-id="238:1210" className="bg-[var(--colors\\/surface\\/04,#172330)] content-stretch flex items-start px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/sm,8px)] shrink-0" data-name="badge">
                  <p data-node-id="I238:1210;151:1957" className={`font-[family-name:var(--label\\/xs\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/xs\\/font-weight,normal)] leading-[var(--label\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/xs\\/font-size,12px)] text-center tracking-[var(--tracking\\/global\\/label-xs,-0.5px)]`}>
                    Category
                  </p>
                </div>
              </div>
              <p data-node-id="238:1211" className={`font-[family-name:var(--body\\/xs\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/xs\\/font-weight,normal)] leading-[var(--body\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--body\\/xs\\/font-size,12px)] tracking-[var(--tracking\\/global\\/body-xs,0px)]`}>
                Publisher
              </p>
            </div>
            <p data-node-id="238:1212" className={`font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#fafafa)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] w-full whitespace-pre-wrap`}>
              Description
            </p>
          </div>
        </div>
      )}
      <div id={isDesktop ? "node-238_1217" : isMobile ? "node-238_1256" : ""} className={`content-stretch flex flex-col gap-[var(--spacing\/xl,0px)] items-start justify-center py-0 relative shrink-0 ${isDesktop ? "px-[var(--spacing\/xl,24px)] w-full" : isMobile ? "px-[var(--spacing\/md,16px)] w-[328px]" : ""}`} data-name="content">
        {isDesktop && (
          <div data-node-id="238:1219" className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="container">
            <div data-node-id="238:1220" className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\\/md,16px)] items-start min-h-px min-w-px p-[var(--spacing\\/md,16px)] relative rounded-[24px] self-stretch shrink-0" data-name="left">
              <p data-node-id="238:1221" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Add Manually
              </p>
              <ol data-node-id="238:1222" className={`block font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[0] list-decimal relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] whitespace-nowrap whitespace-pre-wrap`} start="1">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">Copy the App URL</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">In Spixi, go to Apps → + Add Mini App</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">Paste the link and tap Get from URL</span>
                </li>
              </ol>
              <div data-node-id="238:1223" className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="address">
                <p data-node-id="238:1224" className={`font-[family-name:var(--label\\/xs\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/xs\\/font-weight,normal)] leading-[var(--label\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/xs\\/font-size,12px)] tracking-[var(--tracking\\/global\\/label-xs,-0.5px)]`}>
                  App URL
                </p>
                <div data-node-id="238:1225" className="bg-[var(--colors\\/surface\\/04,#172330)] content-stretch flex items-center justify-between p-[var(--spacing\\/sm,12px)] relative rounded-[var(--corner-radius\\/md,12px)] shrink-0 w-full" data-name="container">
                  <p data-node-id="238:1226" className={`flex-[1_0_0] font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] min-h-px min-w-px relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] whitespace-pre-wrap`}>
                    URL-address
                  </p>
                  <CopySimple className="overflow-clip relative shrink-0 size-[24px]" />
                </div>
              </div>
            </div>
            <div data-node-id="238:1228" className="bg-[var(--colors\\/surface\\/03,#0e1820)] content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\\/md,16px)] items-center justify-center min-h-px min-w-px p-[var(--spacing\\/md,16px)] relative rounded-[24px] shrink-0" data-name="right">
              <div data-node-id="238:1229" className="h-[164px] relative shrink-0 w-[166px]" data-name="QR Code">
                <img className="block max-w-none size-full" alt="" src={imgQrCode} />
              </div>
              <p data-node-id="238:1231" className={`font-[family-name:var(--label\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/sm\\/font-weight,normal)] leading-[var(--label\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--label\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/label-sm,-0.5px)]`}>
                Scan with Spixi
              </p>
              <p data-node-id="238:1232" className={`font-[family-name:var(--body\\/xs\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/xs\\/font-weight,normal)] leading-[var(--body\\/xs\\/line-height,16px)] min-w-full relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--body\\/xs\\/font-size,12px)] text-center tracking-[var(--tracking\\/global\\/body-xs,0px)] w-[min-content] whitespace-pre-wrap`}>
                *Open this mini app on another device.
              </p>
            </div>
          </div>
        )}
        {isMobile && (
          <div data-node-id="238:1258" className="content-stretch flex flex-col gap-[var(--spacing\\/xs,8px)] items-center relative shrink-0 w-full">
            <div data-node-id="238:1296" className="content-stretch flex flex-col gap-[var(--spacing\\/md,16px)] items-start px-[var(--spacing\\/none,0px)] py-[var(--spacing\\/md,16px)] relative rounded-[24px] shrink-0 w-full" data-name="left">
              <p data-node-id="238:1297" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Add Manually
              </p>
              <ol data-node-id="238:1298" className={`block font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[0] list-decimal relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] whitespace-nowrap whitespace-pre-wrap`} start="1">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">Copy the App URL</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">In Spixi, go to Apps → + Add Mini App</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[var(--body\\/sm\\/line-height,20px)]">Paste the link and tap Get from URL</span>
                </li>
              </ol>
              <div data-node-id="238:1299" className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="address">
                <p data-node-id="238:1300" className={`font-[family-name:var(--label\\/xs\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/xs\\/font-weight,normal)] leading-[var(--label\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/xs\\/font-size,12px)] tracking-[var(--tracking\\/global\\/label-xs,-0.5px)]`}>
                  App URL
                </p>
                <div data-node-id="238:1301" className="bg-[var(--colors\\/surface\\/04,#172330)] content-stretch flex items-center justify-between p-[var(--spacing\\/sm,12px)] relative rounded-[var(--corner-radius\\/md,12px)] shrink-0 w-full" data-name="container">
                  <p data-node-id="238:1302" className={`flex-[1_0_0] font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] min-h-px min-w-px relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] whitespace-pre-wrap`}>
                    URL-address
                  </p>
                  <CopySimple className="overflow-clip relative shrink-0 size-[24px]" />
                </div>
              </div>
            </div>
            <div data-node-id="238:1281" className="bg-[var(--colors\\/surface\\/03,#0e1820)] content-stretch flex flex-col gap-[var(--spacing\\/md,16px)] items-center justify-center p-[var(--spacing\\/md,16px)] relative rounded-[24px] shrink-0 w-full" data-name="right">
              <p data-node-id="238:1284" className={`font-[family-name:var(--label\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/sm\\/font-weight,normal)] leading-[var(--label\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--label\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/label-sm,-0.5px)]`}>
                Or scan with Spixi
              </p>
              <div data-node-id="238:1282" className="h-[164px] relative shrink-0 w-[166px]" data-name="QR Code">
                <img className="block max-w-none size-full" alt="" src={imgQrCode} />
              </div>
              <p data-node-id="238:1285" className={`font-[family-name:var(--body\\/xs\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/xs\\/font-weight,normal)] leading-[var(--body\\/xs\\/line-height,16px)] min-w-full relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--body\\/xs\\/font-size,12px)] text-center tracking-[var(--tracking\\/global\\/body-xs,0px)] w-[min-content] whitespace-pre-wrap`}>
                *Open this mini app on another device.
              </p>
            </div>
          </div>
        )}
      </div>
      <div id={isDesktop ? "node-238_1306" : isMobile ? "node-238_1331" : ""} className="content-stretch flex flex-col h-[80px] items-center justify-between p-[var(--spacing\\/md,16px)] relative shrink-0 w-full" data-name="container">
        <div id={isDesktop ? "node-238_1307" : isMobile ? "node-238_1332" : ""} className={isDesktop ? "border-[var(--colors\\/outline\\/action-secondary\\/default,#f9fafb)] border-[var(--outline-width\\/md,2px)] border-solid content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center min-w-[128px] px-[var(--spacing\\/md,16px)] py-[var(--spacing\\/sm,12px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" : isMobile ? "border-[var(--colors\\/outline\\/action-secondary\\/default,#f9fafb)] border-[var(--outline-width\\/md,2px)] border-solid content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center min-w-[128px] px-[var(--spacing\\/md,16px)] py-[var(--spacing\\/sm,12px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0 w-full" : ""} data-name="btn-md">
          <div id={isDesktop ? "node-I238_1307-53_258" : isMobile ? "node-I238_1332-53_258" : ""} className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
            <p id={isDesktop ? "node-I238_1307-53_259" : isMobile ? "node-I238_1332-53_259" : ""} className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/on-action,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
              Close
            </p>
          </div>
        </div>
      </div>
      {isMobile && (
        <div data-node-id="238:1243" className="content-stretch flex flex-col gap-[var(--spacing\\/lg,20px)] items-start p-[var(--spacing\\/md,16px)] relative rounded-tl-[var(--corner-radius\\/lg\\+,20px)] rounded-tr-[var(--corner-radius\\/lg\\+,20px)] shrink-0 w-full" data-name="app-details">
          <div data-node-id="238:1244" className="content-stretch flex gap-[var(--spacing\\/xs,8px)] items-center relative shrink-0 w-full" data-name="img">
            <div data-node-id="238:1245" className="border border-[var(--colors\\/outline\\/03,#3f3f46)] border-solid relative rounded-[var(--corner-radius\\/sm,8px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 size-[48px]" data-name="app-img">
              <img className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[var(--corner-radius\\/sm,8px)] size-full" alt="" src={imgAppImage} />
            </div>
            <div data-node-id="238:1287" className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\\/xxs,4px)] items-start min-h-px min-w-px relative shrink-0" data-name="meta">
              <div data-node-id="238:1288" className="content-stretch flex gap-[var(--spacing\\/sm,12px)] items-center relative shrink-0 w-full" data-name="row">
                <p data-node-id="238:1289" className={`font-[family-name:var(--heading\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--heading\\/sm\\/font-weight,normal)] leading-[var(--heading\\/sm\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#fafafa)] text-[length:var(--heading\\/sm\\/font-size,18px)] tracking-[var(--tracking\\/heading\\/heading-sm,-0.5px)]`}>
                  Title
                </p>
                <div data-node-id="238:1290" className="bg-[var(--colors\\/surface\\/04,#172330)] content-stretch flex items-start px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/sm,8px)] shrink-0" data-name="badge">
                  <p data-node-id="I238:1290;151:1957" className={`font-[family-name:var(--label\\/xs\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/xs\\/font-weight,normal)] leading-[var(--label\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/xs\\/font-size,12px)] text-center tracking-[var(--tracking\\/global\\/label-xs,-0.5px)]`}>
                    Category
                  </p>
                </div>
              </div>
              <p data-node-id="238:1291" className={`font-[family-name:var(--body\\/xs\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/xs\\/font-weight,normal)] leading-[var(--body\\/xs\\/line-height,16px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#d4d4d8)] text-[length:var(--body\\/xs\\/font-size,12px)] tracking-[var(--tracking\\/global\\/body-xs,0px)]`}>
                Publisher
              </p>
            </div>
          </div>
          <div data-node-id="238:1251" className="content-stretch flex flex-col gap-[var(--spacing\\/xs,0px)] items-start relative shrink-0 w-full" data-name="details">
            <p data-node-id="238:1294" className={`font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#fafafa)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] w-full whitespace-pre-wrap`}>
              Description
            </p>
          </div>
        </div>
      )}
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/heading/sm: Font(family: "heading/sm/font-family", style: heading/sm/font-weight, size: heading/sm/font-size, weight: 600, lineHeight: heading/sm/line-height, letterSpacing: tracking/heading/heading-sm), typography/label/xs: Font(family: "label/xs/font-family", style: label/xs/font-weight, size: label/xs/font-size, weight: 600, lineHeight: label/xs/line-height, letterSpacing: tracking/global/label-xs), typography/body/xs: Font(family: "body/xs/font-family", style: body/xs/font-weight, size: body/xs/font-size, weight: 400, lineHeight: body/xs/line-height, letterSpacing: tracking/global/body-xs), typography/body/sm: Font(family: "body/sm/font-family", style: body/sm/font-weight, size: body/sm/font-size, weight: 400, lineHeight: body/sm/line-height, letterSpacing: tracking/global/body-sm), mini app top: , typography/label/md: Font(family: "label/md/font-family", style: label/md/font-weight, size: label/md/font-size, weight: 600, lineHeight: label/md/line-height, letterSpacing: tracking/global/label-md), typography/label/sm: Font(family: "label/sm/font-family", style: label/sm/font-weight, size: label/sm/font-size, weight: 600, lineHeight: label/sm/line-height, letterSpacing: tracking/global/label-sm).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `242:2035`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a Modal component with two variants: desktop (wide, two-column layout) and mobile (stacked, single-column layout). Let me create clean HTML + CSS code for you.
modal.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modal Component</title>
  <link rel="stylesheet" href="modal.css">
</head>
<body>
  <!-- Desktop Modal -->
  <div class="modal modal--desktop">
    <!-- App Details Header (Desktop only) -->
    <div class="modal__header">
      <div class="modal__app-image">
        <img src="app-icon.png" alt="App Icon">
      </div>
      <div class="modal__details">
        <div class="modal__meta">
          <div class="modal__title-row">
            <h2 class="modal__title">Title</h2>
            <span class="modal__badge">Category</span>
          </div>
          <p class="modal__publisher">Publisher</p>
        </div>
        <p class="modal__description">Description</p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="modal__content">
      <div class="modal__container">
        <!-- Left Column - Manual Instructions -->
        <div class="modal__left">
          <h3 class="modal__section-title">Add Manually</h3>
          <ol class="modal__instructions">
            <li>Copy the App URL</li>
            <li>In Spixi, go to Apps → + Add Mini App</li>
            <li>Paste the link and tap Get from URL</li>
          </ol>
          <div class="modal__address-section">
            <label class="modal__label">App URL</label>
            <div class="modal__url-container">
              <span class="modal__url-text">URL-address</span>
              <button class="modal__copy-btn" aria-label="Copy URL">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column - QR Code -->
        <div class="modal__right">
          <div class="modal__qr-code">
            <img src="qr-code.png" alt="QR Code">
          </div>
          <p class="modal__qr-title">Scan with Spixi</p>
          <p class="modal__qr-note">*Open this mini app on another device.</p>
        </div>
      </div>
    </div>

    <!-- Close Button -->
    <div class="modal__footer">
      <button class="modal__close-btn">Close</button>
    </div>
  </div>

  <!-- Mobile Modal -->
  <div class="modal modal--mobile">
    <!-- App Details Header (Mobile - at bottom) -->
    <div class="modal__header modal__header--mobile">
      <div class="modal__app-row">
        <div class="modal__app-image modal__app-image--small">
          <img src="app-icon.png" alt="App Icon">
        </div>
        <div class="modal__meta">
          <div class="modal__title-row">
            <h2 class="modal__title modal__title--small">Title</h2>
            <span class="modal__badge">Category</span>
          </div>
          <p class="modal__publisher">Publisher</p>
        </div>
      </div>
      <p class="modal__description">Description</p>
    </div>

    <!-- Content Section -->
    <div class="modal__content modal__content--mobile">
      <div class="modal__single-column">
        <!-- Manual Instructions -->
        <div class="modal__left modal__left--mobile">
          <h3 class="modal__section-title">Add Manually</h3>
          <ol class="modal__instructions">
            <li>Copy the App URL</li>
            <li>In Spixi, go to Apps → + Add Mini App</li>
            <li>Paste the link and tap Get from URL</li>
          </ol>
          <div class="modal__address-section">
            <label class="modal__label">App URL</label>
            <div class="modal__url-container">
              <span class="modal__url-text">URL-address</span>
              <button class="modal__copy-btn" aria-label="Copy URL">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- QR Code -->
        <div class="modal__right modal__right--mobile">
          <p class="modal__qr-title">Or scan with Spixi</p>
          <div class="modal__qr-code">
            <img src="qr-code.png" alt="QR Code">
          </div>
          <p class="modal__qr-note">*Open this mini app on another device.</p>
        </div>
      </div>
    </div>

    <!-- Close Button -->
    <div class="modal__footer">
      <button class="modal__close-btn modal__close-btn--full">Close</button>
    </div>
  </div>
</body>
</html>
modal.css
css/* Base Modal Styles */
.modal {
  background-color: #04070b;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
}

/* Desktop Modal */
.modal--desktop {
  width: 760px;
  gap: 24px;
}

/* Mobile Modal */
.modal--mobile {
  width: 328px;
}

/* Header - Desktop */
.modal__header {
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 20px 20px 0 0;
}

/* Header - Mobile (positioned at bottom of visual hierarchy) */
.modal__header--mobile {
  padding: 16px;
  order: -1; /* Keeps it at top in DOM but can be styled differently */
}

.modal__app-row {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.modal__app-image {
  width: 96px;
  height: 96px;
  border: 1px solid #3f3f46;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  flex-shrink: 0;
}

.modal__app-image--small {
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

.modal__app-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal__details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.modal__meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.modal__title-row {
  display: flex;
  gap: 12px;
  align-items: center;
}

.modal__title {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.5px;
  color: #fafafa;
  margin: 0;
}

.modal__title--small {
  font-size: 18px;
  line-height: 24px;
}

.modal__badge {
  background-color: #172330;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.5px;
  color: #f9fafb;
  white-space: nowrap;
}

.modal__publisher {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #d4d4d8;
  margin: 0;
}

.modal__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #fafafa;
  margin: 0;
  white-space: pre-wrap;
}

/* Content Section */
.modal__content {
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}

.modal__content--mobile {
  padding: 0 16px;
  width: 100%;
}

.modal__container {
  display: flex;
  gap: 24px;
}

.modal__single-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

/* Left Column - Manual Instructions */
.modal__left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 24px;
}

.modal__left--mobile {
  padding: 16px 0;
}

.modal__section-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #d4d4d8;
  margin: 0;
}

.modal__instructions {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #f9fafb;
  margin: 0;
  padding-left: 21px;
}

.modal__instructions li {
  margin-bottom: 0;
}

.modal__address-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.modal__label {
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.5px;
  color: #f9fafb;
}

.modal__url-container {
  background-color: #172330;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 12px;
}

.modal__url-text {
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #f9fafb;
  white-space: pre-wrap;
}

.modal__copy-btn {
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #04070b;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__copy-btn:hover {
  opacity: 0.8;
}

/* Right Column - QR Code */
.modal__right {
  flex: 1;
  background-color: #0e1820;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 24px;
}

.modal__right--mobile {
  width: 100%;
}

.modal__qr-code {
  width: 166px;
  height: 164px;
}

.modal__qr-code img {
  width: 100%;
  height: 100%;
  display: block;
}

.modal__qr-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #d4d4d8;
  margin: 0;
}

.modal__qr-note {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #d4d4d8;
  text-align: center;
  margin: 0;
  white-space: pre-wrap;
}

/* Footer */
.modal__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  height: 80px;
}

.modal__close-btn {
  border: 2px solid #f9fafb;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 128px;
  padding: 12px 16px;
  border-radius: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #f9fafb;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal__close-btn--full {
  width: 100%;
}

.modal__close-btn:hover {
  background-color: rgba(249, 250, 251, 0.1);
}

.modal__close-btn:active {
  transform: scale(0.98);
}
Usage:
To use the Desktop version:
html<div class="modal modal--desktop">
  <!-- Use the desktop modal structure -->
</div>
To use the Mobile version:
html<div class="modal modal--mobile">
  <!-- Use the mobile modal structure -->
</div>
Key Features:

✅ Two responsive variants: Desktop (760px wide, two-column) and Mobile (328px wide, stacked)
✅ Desktop layout: Header with app details at top, two-column content (manual instructions + QR code)
✅ Mobile layout: App details at top, single-column stacked content
✅ Interactive elements: Copy button, close button with hover states
✅ All typography and spacing matches the Figma design exactly
✅ Color scheme: Dark theme with proper contrast

Note: Don't forget to include the Inter font:
html<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
Replace app-icon.png and qr-code.png with your actual image paths!DImplement this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=249-3469&m=dev Create this navbar components in html css as previsouly done. So I can paste it in claude code.Get design contextRequest{
  `nodeId`: `249:3469`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst imgIcon = "https://www.figma.com/api/mcp/asset/ed807d23-bbfa-4b28-b214-a2cdd507045e";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/46852b5c-c15b-44d8-9858-f1dc8a797475";
type ListProps = {
  className?: string;
  type?: "regular";
};

function List({ className, type = "regular" }: ListProps) {
  return (
    <div data-node-id="5:714" className={className}>
      <div data-node-id="5:713" className="absolute inset-[21.88%_12.5%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(249, 250, 251, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" alt="" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}
type NavBarProps = {
  size?: "desktop" | "mobile";
};

export default function NavBar({ size = "desktop" }: NavBarProps) {
  const isDesktop = size === "desktop";
  const isMobile = size === "mobile";
  return (
    <div id={isDesktop ? "node-249_3470" : isMobile ? "node-249_3481" : ""} className={`content-stretch flex items-center justify-between relative ${isDesktop ? "px-[var(--spacing\/super-lg,80px)] py-[var(--spacing\/md,16px)] w-[1439px]" : isMobile ? "px-[var(--spacing\/md,16px)] py-[var(--spacing\/xs,8px)] w-[375px]" : ""}`}>
      <div id={isDesktop ? "node-249_3471" : isMobile ? "node-249_3482" : ""} className={`content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative shrink-0 ${isDesktop ? "gap-[var(--spacing\/xxs,4px)]" : isMobile ? "gap-[var(--spacing\/xxs,0px)]" : ""}`} data-name="Logo">
        <div id={isDesktop ? "node-249_3472" : isMobile ? "node-249_3483" : ""} className="overflow-clip relative shrink-0 size-[32px]" data-name="spixi-logo">
          <div id={isDesktop ? "node-I249_3472-5_775" : isMobile ? "node-I249_3483-5_775" : ""} className="absolute inset-[3.19%_11.8%_3.59%_11.82%]" data-name="Group">
            <img className="block max-w-none size-full" alt="" src={imgIcon1} />
          </div>
        </div>
        {isDesktop && (
          <p data-node-id="249:3473" className={`font-[family-name:var(--heading\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--heading\\/md\\/font-weight,normal)] leading-[var(--heading\\/md\\/line-height,36px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--heading\\/md\\/font-size,24px)] text-center tracking-[var(--tracking\\/heading\\/heading-md,-1px)]`}>
            Spixi
          </p>
        )}
      </div>
      {isDesktop && (
        <div data-node-id="249:3474" className="content-stretch flex gap-[var(--spacing\\/super,64px)] items-center relative shrink-0" data-name="nav">
          <div data-node-id="249:3475" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3475;53:211" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3475;53:212" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Features
              </p>
            </div>
          </div>
          <div data-node-id="249:3476" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3476;53:211" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3476;53:212" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                How it works
              </p>
            </div>
          </div>
          <div data-node-id="249:3477" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3477;53:211" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3477;53:212" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Mini Apps
              </p>
            </div>
          </div>
          <div data-node-id="249:3478" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3478;53:211" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3478;53:212" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Technology
              </p>
            </div>
          </div>
          <div data-node-id="249:3522" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3522;53:211" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3522;53:212" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                FAQ
              </p>
            </div>
          </div>
        </div>
      )}
      <div id={isDesktop ? "node-249_3479" : isMobile ? "node-249_3484" : ""} className={`content-stretch flex items-center justify-end relative shrink-0 ${isDesktop ? "flex-[1_0_0] gap-[var(--spacing\/lg,0px)] min-h-px min-w-px" : isMobile ? "gap-[var(--spacing\/lg,20px)]" : ""}`} data-name="right">
        {isDesktop && (
          <div data-node-id="249:3480" className="border-[var(--colors\\/outline\\/action-secondary\\/default,#f9fafb)] border-[var(--outline-width\\/md,2px)] border-solid content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/md,16px)] py-[var(--spacing\\/sm,12px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
            <div data-node-id="I249:3480;53:258" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
              <p data-node-id="I249:3480;53:259" className={`font-[family-name:var(--label\\/md\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/md\\/font-weight,normal)] leading-[var(--label\\/md\\/line-height,24px)] relative shrink-0 text-[color:var(--colors\\/text\\/on-action,#f9fafb)] text-[length:var(--label\\/md\\/font-size,16px)] tracking-[var(--tracking\\/global\\/label-md,-0.5px)]`}>
                Download Spixi
              </p>
            </div>
          </div>
        )}
        {isMobile && (
          <>
            <div data-node-id="249:3485" className="border-[var(--colors\\/outline\\/action-secondary\\/default,#f9fafb)] border-[var(--outline-width\\/md,2px)] border-solid content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/sm,12px)] py-[var(--spacing\\/xs,8px)] relative rounded-[var(--corner-radius\\/md,12px)] shrink-0" data-name="btn-sm">
              <div data-node-id="I249:3485;151:1695" className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
                <p data-node-id="I249:3485;151:1696" className={`font-[family-name:var(--label\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/sm\\/font-weight,normal)] leading-[var(--label\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/on-action,#f9fafb)] text-[length:var(--label\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/label-sm,-0.5px)]`}>
                  Download Spixi
                </p>
              </div>
            </div>
            <List className="overflow-clip relative shrink-0 size-[24px]" />
          </>
        )}
      </div>
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/heading/md: Font(family: "heading/md/font-family", style: heading/md/font-weight, size: heading/md/font-size, weight: 600, lineHeight: heading/md/line-height, letterSpacing: tracking/heading/heading-md), typography/label/md: Font(family: "label/md/font-family", style: label/md/font-weight, size: label/md/font-size, weight: 600, lineHeight: label/md/line-height, letterSpacing: tracking/global/label-md), typography/label/sm: Font(family: "label/sm/font-family", style: label/sm/font-weight, size: label/sm/font-size, weight: 600, lineHeight: label/sm/line-height, letterSpacing: tracking/global/label-sm).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `249:3469`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a NavBar component with two variants: Desktop (full navigation with menu items) and Mobile (logo + download button + hamburger menu). Let me create clean HTML + CSS code for you.
navbar.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NavBar Component</title>
  <link rel="stylesheet" href="navbar.css">
</head>
<body>
  <!-- Desktop NavBar -->
  <nav class="navbar navbar--desktop">
    <!-- Logo -->
    <div class="navbar__logo">
      <div class="navbar__logo-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L4 8v8c0 7.73 5.34 14.96 12 16.73 6.66-1.77 12-9 12-16.73V8L16 2z" fill="url(#gradient)" stroke="#fff" stroke-width="2"/>
          <defs>
            <linearGradient id="gradient" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8B5CF6"/>
              <stop offset="1" stop-color="#EC4899"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span class="navbar__logo-text">Spixi</span>
    </div>

    <!-- Navigation Links -->
    <div class="navbar__nav">
      <a href="#features" class="navbar__nav-link">Features</a>
      <a href="#how-it-works" class="navbar__nav-link">How it works</a>
      <a href="#mini-apps" class="navbar__nav-link">Mini Apps</a>
      <a href="#technology" class="navbar__nav-link">Technology</a>
      <a href="#faq" class="navbar__nav-link">FAQ</a>
    </div>

    <!-- Right Section -->
    <div class="navbar__right">
      <button class="navbar__download-btn">Download Spixi</button>
    </div>
  </nav>

  <!-- Mobile NavBar -->
  <nav class="navbar navbar--mobile">
    <!-- Logo -->
    <div class="navbar__logo">
      <div class="navbar__logo-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L4 8v8c0 7.73 5.34 14.96 12 16.73 6.66-1.77 12-9 12-16.73V8L16 2z" fill="url(#gradient-mobile)" stroke="#fff" stroke-width="2"/>
          <defs>
            <linearGradient id="gradient-mobile" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8B5CF6"/>
              <stop offset="1" stop-color="#EC4899"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <!-- Right Section -->
    <div class="navbar__right navbar__right--mobile">
      <button class="navbar__download-btn navbar__download-btn--mobile">Download Spixi</button>
      <button class="navbar__menu-btn" aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </nav>
</body>
</html>
navbar.css
css/* Base Navbar Styles */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  background-color: transparent;
}

/* Desktop NavBar */
.navbar--desktop {
  width: 100%;
  max-width: 1439px;
  padding: 16px 80px;
  margin: 0 auto;
}

/* Mobile NavBar */
.navbar--mobile {
  width: 100%;
  max-width: 375px;
  padding: 8px 16px;
  margin: 0 auto;
}

/* Logo Section */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.navbar--mobile .navbar__logo {
  gap: 0;
  flex: 1;
}

.navbar__logo-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar__logo-text {
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -1px;
  color: #f9fafb;
  white-space: nowrap;
}

/* Navigation Links (Desktop only) */
.navbar__nav {
  display: flex;
  gap: 64px;
  align-items: center;
}

.navbar__nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #f9fafb;
  text-decoration: none;
  transition: all 0.2s ease;
}

.navbar__nav-link:hover {
  background-color: rgba(249, 250, 251, 0.1);
}

.navbar__nav-link:active {
  transform: scale(0.98);
}

/* Right Section */
.navbar__right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}

.navbar--desktop .navbar__right {
  flex: 1;
}

/* Download Button */
.navbar__download-btn {
  border: 2px solid #f9fafb;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #f9fafb;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.navbar__download-btn:hover {
  background-color: rgba(249, 250, 251, 0.1);
}

.navbar__download-btn:active {
  transform: scale(0.98);
}

/* Mobile Download Button */
.navbar__download-btn--mobile {
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
}

/* Menu Button (Mobile only) */
.navbar__menu-btn {
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
}

.navbar__menu-btn:hover {
  opacity: 0.8;
}

.navbar__menu-btn:active {
  transform: scale(0.95);
}

/* Responsive: Hide elements based on viewport */
@media (max-width: 768px) {
  .navbar--desktop {
    display: none;
  }
}

@media (min-width: 769px) {
  .navbar--mobile {
    display: none;
  }
}

/* Optional: Full-width navbar background */
body {
  margin: 0;
  padding: 0;
  background-color: #000;
}
Usage:
For Desktop:
html<nav class="navbar navbar--desktop">
  <!-- Desktop navbar content -->
</nav>
For Mobile:
html<nav class="navbar navbar--mobile">
  <!-- Mobile navbar content -->
</nav>
Key Features:

✅ Two responsive variants: Desktop (1439px max-width) and Mobile (375px max-width)
✅ Desktop layout: Logo + Navigation Links (Features, How it works, Mini Apps, Technology, FAQ) + Download button
✅ Mobile layout: Logo + Download button + Hamburger menu icon
✅ Interactive elements: All links and buttons have hover/active states
✅ Typography: Matches Figma design exactly
✅ Responsive: Automatically switches between desktop/mobile based on viewport width

Optional JavaScript for Menu Toggle:
javascript// Add this to make the mobile menu button functional
const menuBtn = document.querySelector('.navbar__menu-btn');
menuBtn?.addEventListener('click', () => {
  // Add your mobile menu open logic here
  console.log('Menu clicked!');
});
Note: Include the Inter font:
html<link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet">
The SVG logo is a simplified placeholder - you can replace it with your actual Spixi logo SVG or image!Dcreate list item
Implement this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=132-1291&m=devGet design contextRequest{
  `nodeId`: `132:1291`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst imgIcon = "https://www.figma.com/api/mcp/asset/914eb787-1dad-43c3-b219-5a497e564e72";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/e05c444d-3cc0-4398-8281-025073b626ae";
const img = "https://www.figma.com/api/mcp/asset/d5c04b90-0eb2-4955-838b-226ad9a8d718";
type WifiHighProps = {
  className?: string;
  type?: "fill" | "regular" | "light";
};

function WifiHigh({ className, type = "light" }: WifiHighProps) {
  return (
    <div data-node-id="132:1424" className={className}>
      <div data-node-id="132:1423" className="absolute inset-[19.53%_7.02%_16.41%_7.02%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" alt="" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}
type ChatCircleDotsProps = {
  className?: string;
  type?: "regular" | "fill" | "light";
};

function ChatCircleDots({ className, type = "light" }: ChatCircleDotsProps) {
  return (
    <div data-node-id="132:1306" className={className}>
      <div data-node-id="132:1305" className="absolute inset-[10.17%_10.16%_10.15%_10.16%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" alt="" src={imgIcon1} />
        </div>
      </div>
    </div>
  );
}
type ListItemProps = {
  text?: string;
  title?: string;
  showBodySm?: boolean;
  lightIcon?: React.ReactNode | null;
};

export default function ListItem({ text = "text", title = "Title", showBodySm = true, lightIcon = null }: ListItemProps) {
  return (
    <div className="content-stretch flex gap-[var(--spacing\/lg,20px)] items-center relative w-[468px]" data-name="list-item" data-node-id="132:1291">
      <div className="bg-[var(--colors\/surface\/02,#f3f4f6)] content-stretch flex gap-[var(--spacing\/none,0px)] items-center p-[var(--spacing\/sm,12px)] relative rounded-[var(--corner-radius\/xxl,32px)] shrink-0" data-name="icon" data-node-id="132:1285">
        {lightIcon || (
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ChatCircleDots" data-node-id="132:1337">
            <div className="absolute inset-[10.17%_10.16%_10.15%_10.16%]" data-name="icon" data-node-id="I132:1337;132:1305">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 79, 196, 1)" } as React.CSSProperties}>
                <img alt="" className="block max-w-none size-full" src={img} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/xs,8px)] items-start justify-center min-h-px min-w-px relative shrink-0 whitespace-pre-wrap" data-name="content" data-node-id="132:1287">
        <p className="font-[family-name:var(--label\/lg\/font-family,'Inter:semibold',sans-serif)] font-[var(--label\/lg\/font-weight,normal)] leading-[var(--label\/lg\/line-height,28px)] relative shrink-0 text-[color:var(--colors\/text\/01,#04070b)] text-[length:var(--label\/lg\/font-size,18px)] tracking-[var(--tracking\/global\/label-lg,-0.5px)] w-full" data-node-id="132:1288">
          {title}
        </p>
        {showBodySm && (
          <p className="font-[family-name:var(--body\/sm\/font-family,'Inter:regular',sans-serif)] font-[var(--body\/sm\/font-weight,normal)] leading-[var(--body\/sm\/line-height,20px)] relative shrink-0 text-[color:var(--colors\/text\/02,#172330)] text-[length:var(--body\/sm\/font-size,14px)] tracking-[var(--tracking\/global\/body-sm,0px)] w-full" data-node-id="132:1289">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/label/lg: Font(family: "label/lg/font-family", style: label/lg/font-weight, size: label/lg/font-size, weight: 600, lineHeight: label/lg/line-height, letterSpacing: tracking/global/label-lg), typography/body/sm: Font(family: "body/sm/font-family", style: body/sm/font-weight, size: body/sm/font-size, weight: 400, lineHeight: body/sm/line-height, letterSpacing: tracking/global/body-sm).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `132:1291`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a List Item component with an icon, title, and optional description text. Let me create clean HTML + CSS code for you.
list-item.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>List Item Component</title>
  <link rel="stylesheet" href="list-item.css">
</head>
<body>
  <!-- List Item with Description -->
  <div class="list-item">
    <div class="list-item__icon">
      <svg class="list-item__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333S23.364 2.667 16 2.667 2.667 8.637 2.667 16 8.637 29.333 16 29.333z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.667 13.333h.013M16 13.333h.013M21.333 13.333h.013" stroke="#AD4FC4" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.667 19.333c1.333 1.778 3.11 2.667 5.333 2.667 2.222 0 4-0.889 5.333-2.667" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="list-item__content">
      <h3 class="list-item__title">Title</h3>
      <p class="list-item__text">text</p>
    </div>
  </div>

  <!-- List Item without Description -->
  <div class="list-item">
    <div class="list-item__icon">
      <svg class="list-item__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9.333L16 4l8 5.333v9.334c0 7.73-5.34 14.96-12 16.73-6.66-1.77-12-9-12-16.73V9.333z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 14.667v5.333M16 24h.013" stroke="#AD4FC4" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="list-item__content">
      <h3 class="list-item__title">Another Title</h3>
    </div>
  </div>

  <!-- List Item with WiFi Icon -->
  <div class="list-item">
    <div class="list-item__icon">
      <svg class="list-item__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.333 11.333C8.222 7.556 13.889 5.333 16 5.333c2.111 0 7.778 2.223 12.667 6M7.111 16c3.334-2.667 6.667-4 8.889-4s5.555 1.333 8.889 4M11.556 20.667c1.777-1.334 3.555-2 4.444-2 .89 0 2.667.666 4.444 2M16 26.667h.013" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="list-item__content">
      <h3 class="list-item__title">Network Connection</h3>
      <p class="list-item__text">Stay connected with reliable network</p>
    </div>
  </div>
</body>
</html>
list-item.css
css/* Base List Item Styles */
.list-item {
  display: flex;
  gap: 20px;
  align-items: center;
  width: 468px;
  font-family: 'Inter', sans-serif;
}

/* Icon Container */
.list-item__icon {
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 32px;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
}

.list-item__icon-svg {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

/* Content Section */
.list-item__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
  white-space: pre-wrap;
}

/* Title */
.list-item__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.5px;
  color: #04070b;
  margin: 0;
  width: 100%;
}

/* Description Text */
.list-item__text {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #172330;
  margin: 0;
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .list-item {
    width: 100%;
    max-width: 468px;
  }
}

/* Dark theme variant (optional) */
.list-item--dark {
  background-color: transparent;
}

.list-item--dark .list-item__icon {
  background-color: #172330;
}

.list-item--dark .list-item__title {
  color: #fafafa;
}

.list-item--dark .list-item__text {
  color: #d4d4d8;
}

/* Optional hover effect */
.list-item:hover .list-item__icon {
  background-color: #e5e7eb;
  transition: background-color 0.2s ease;
}

.list-item--dark:hover .list-item__icon {
  background-color: #1e2936;
}

/* Utility: List Item without description */
.list-item--no-description .list-item__content {
  gap: 0;
}
Usage Examples:
1. List Item with Description:
html<div class="list-item">
  <div class="list-item__icon">
    <!-- Your icon SVG here -->
  </div>
  <div class="list-item__content">
    <h3 class="list-item__title">Title</h3>
    <p class="list-item__text">Description text goes here</p>
  </div>
</div>
2. List Item without Description:
html<div class="list-item list-item--no-description">
  <div class="list-item__icon">
    <!-- Your icon SVG here -->
  </div>
  <div class="list-item__content">
    <h3 class="list-item__title">Title</h3>
  </div>
</div>
3. Dark Theme Variant:
html<div class="list-item list-item--dark">
  <div class="list-item__icon">
    <!-- Your icon SVG here -->
  </div>
  <div class="list-item__content">
    <h3 class="list-item__title">Title</h3>
    <p class="list-item__text">Description text</p>
  </div>
</div>
Key Features:

✅ Flexible content: Supports both with and without description text
✅ Icon container: Circular background with proper padding (56x56px)
✅ Typography: Matches Figma design exactly
✅ Responsive: Adapts to smaller screens
✅ Optional dark theme: Easy to switch color schemes
✅ Hover effects: Subtle background color change on hover
✅ Custom icons: Easy to swap SVG icons

Icon SVG Examples:
The component supports any 32x32 icon. Here are some common icon patterns you can use:
html<!-- Chat Icon -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="13.333" stroke="#AD4FC4" stroke-width="2"/>
  <circle cx="10.667" cy="13.333" r="1.333" fill="#AD4FC4"/>
  <circle cx="16" cy="13.333" r="1.333" fill="#AD4FC4"/>
  <circle cx="21.333" cy="13.333" r="1.333" fill="#AD4FC4"/>
</svg>

<!-- WiFi Icon -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M3.333 11.333C8.222 7.556 13.889 5.333 16 5.333c2.111 0 7.778 2.223 12.667 6" stroke="#AD4FC4" stroke-width="2"/>
  <path d="M7.111 16c3.334-2.667 6.667-4 8.889-4s5.555 1.333 8.889 4" stroke="#AD4FC4" stroke-width="2"/>
  <circle cx="16" cy="26.667" r="1.333" fill="#AD4FC4"/>
</svg>
Note: Include the Inter font:
html<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
This component is perfect for feature lists, benefit sections, or any list-based content on your website!DImplement this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=56-723&m=devGet design contextRequest{
  `nodeId`: `56:723`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst imgIcon = "https://www.figma.com/api/mcp/asset/a3d2dcb3-95cd-4ee1-8ea0-90ea953d1fba";
const img = "https://www.figma.com/api/mcp/asset/035af245-cf9c-4c00-a3c1-0a17a31b33ba";
type ChatsCircleProps = {
  className?: string;
  type?: "fill" | "regular" | "light";
};

function ChatsCircle({ className, type = "light" }: ChatsCircleProps) {
  return (
    <div data-node-id="112:9020" className={className}>
      <div data-node-id="112:9019" className="absolute inset-[10.16%_7.02%_10.15%_7.03%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" alt="" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}
type CardMdProps = {
  icon?: React.ReactNode | null;
};

export default function CardMd({ icon = null }: CardMdProps) {
  return (
    <div className="bg-[var(--colors\/surface\/02,#f3f4f6)] border border-[var(--colors\/outline\/02,#a1a1aa)] border-solid content-stretch flex flex-col gap-[var(--spacing\/xl,24px)] h-[276px] items-start overflow-clip p-[var(--spacing\/xl,24px)] relative rounded-[var(--corner-radius\/xxl,32px)] w-[394.5px]" data-name="card-md" data-node-id="56:723">
      <div className="bg-[var(--colors\/surface\/01,#f9fafb)] content-stretch flex gap-[var(--spacing\/none,0px)] items-center p-[var(--spacing\/sm,12px)] relative rounded-[var(--corner-radius\/xxl,32px)] shadow-[0px_0px_12px_0px_rgba(216,182,250,0.25)] shrink-0" data-name="icon" data-node-id="56:717">
        {icon || (
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ChatsCircle" data-node-id="56:718">
            <div className="absolute inset-[9.45%_6.25%_9.37%_6.25%]" data-name="icon" data-node-id="I56:718;25:20121">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 79, 196, 1)" } as React.CSSProperties}>
                <img alt="" className="block max-w-none size-full" src={img} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[color:var(--colors\/text\/01,#04070b)] w-full whitespace-pre-wrap" data-name="text" data-node-id="56:719">
        <p className="font-[family-name:var(--heading\/md\/font-family,'Inter:semibold',sans-serif)] font-[var(--heading\/md\/font-weight,normal)] leading-[var(--heading\/md\/line-height,36px)] relative shrink-0 text-[length:var(--heading\/md\/font-size,24px)] tracking-[var(--tracking\/heading\/heading-md,-1px)] w-full" data-node-id="56:720">
          Title
        </p>
        <p className="font-[family-name:var(--body\/md\/font-family,'Inter:regular',sans-serif)] font-[var(--body\/md\/font-weight,normal)] leading-[var(--body\/md\/line-height,24px)] relative shrink-0 text-[length:var(--body\/md\/font-size,16px)] tracking-[var(--tracking\/global\/body-md,0px)] w-full" data-node-id="56:721">
          body
        </p>
      </div>
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/heading/md: Font(family: "heading/md/font-family", style: heading/md/font-weight, size: heading/md/font-size, weight: 600, lineHeight: heading/md/line-height, letterSpacing: tracking/heading/heading-md), typography/body/md: Font(family: "body/md/font-family", style: body/md/font-weight, size: body/md/font-size, weight: 400, lineHeight: body/md/line-height, letterSpacing: tracking/global/body-md).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `56:723`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a Card component (medium size) with an icon, title, and body text. It has a nice gradient shadow effect on the icon. Let me create clean HTML + CSS code for you.
card-md.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Medium Component</title>
  <link rel="stylesheet" href="card-md.css">
</head>
<body>
  <!-- Card Medium - Default -->
  <div class="card-md">
    <div class="card-md__icon">
      <svg class="card-md__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.333 26.667h-4A2.667 2.667 0 0 1 4.666 24V8a2.667 2.667 0 0 1 2.667-2.667h4a2.667 2.667 0 0 1 2.667 2.667v16a2.667 2.667 0 0 1-2.667 2.667z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.666 26.667h-4A2.667 2.667 0 0 1 18 24V13.333a2.667 2.667 0 0 1 2.667-2.666h4a2.667 2.667 0 0 1 2.667 2.666V24a2.667 2.667 0 0 1-2.667 2.667z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="9.333" cy="12" r="1.333" fill="#AD4FC4"/>
        <circle cx="22.666" cy="17.333" r="1.333" fill="#AD4FC4"/>
      </svg>
    </div>
    <div class="card-md__text">
      <h3 class="card-md__title">Title</h3>
      <p class="card-md__body">body</p>
    </div>
  </div>

  <!-- Card Medium - Chat Icon -->
  <div class="card-md">
    <div class="card-md__icon">
      <svg class="card-md__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.333 18.667h-8A2.667 2.667 0 0 1 10.666 16V8a2.667 2.667 0 0 1 2.667-2.667h8A2.667 2.667 0 0 1 24 8v8a2.667 2.667 0 0 1-2.667 2.667z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.666 13.333H8a2.667 2.667 0 0 0-2.667 2.667v8A2.667 2.667 0 0 0 8 26.667h2.667a2.667 2.667 0 0 0 2.666-2.667v-8a2.667 2.667 0 0 0-2.666-2.667z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 13.333h2.667A2.667 2.667 0 0 1 29.333 16v8a2.667 2.667 0 0 1-2.666 2.667H24a2.667 2.667 0 0 1-2.667-2.667v-8A2.667 2.667 0 0 1 24 13.333z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="card-md__text">
      <h3 class="card-md__title">Real-time Messaging</h3>
      <p class="card-md__body">Connect instantly with friends and family through secure, encrypted conversations.</p>
    </div>
  </div>

  <!-- Card Medium - Security Icon -->
  <div class="card-md">
    <div class="card-md__icon">
      <svg class="card-md__icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 5.333L6.666 9.333v8c0 5.773 4 11.174 9.334 12.5 5.333-1.326 9.333-6.727 9.333-12.5v-8L16 5.333z" stroke="#AD4FC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 16v4M16 24h.013" stroke="#AD4FC4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="card-md__text">
      <h3 class="card-md__title">End-to-End Encryption</h3>
      <p class="card-md__body">Your data is protected with military-grade encryption, ensuring complete privacy.</p>
    </div>
  </div>
</body>
</html>
card-md.css
css/* Base Card Medium Styles */
.card-md {
  background-color: #f3f4f6;
  border: 1px solid #a1a1aa;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 276px;
  padding: 24px;
  border-radius: 32px;
  width: 394.5px;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  position: relative;
}

/* Icon Container */
.card-md__icon {
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 32px;
  box-shadow: 0px 0px 12px 0px rgba(216, 182, 250, 0.25);
  width: 56px;
  height: 56px;
  flex-shrink: 0;
}

.card-md__icon-svg {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

/* Text Content */
.card-md__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #04070b;
  width: 100%;
  white-space: pre-wrap;
  flex-shrink: 0;
}

/* Title */
.card-md__title {
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -1px;
  margin: 0;
  width: 100%;
  color: #04070b;
}

/* Body Text */
.card-md__body {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  margin: 0;
  width: 100%;
  color: #04070b;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-md {
    width: 100%;
    max-width: 394.5px;
    height: auto;
    min-height: 276px;
  }
}

/* Dark theme variant (optional) */
.card-md--dark {
  background-color: #0e1820;
  border-color: #3f3f46;
}

.card-md--dark .card-md__icon {
  background-color: #172330;
  box-shadow: 0px 0px 12px 0px rgba(139, 92, 246, 0.25);
}

.card-md--dark .card-md__title,
.card-md--dark .card-md__body {
  color: #fafafa;
}

/* Hover effect */
.card-md {
  transition: all 0.3s ease;
}

.card-md:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
}

.card-md:hover .card-md__icon {
  box-shadow: 0px 0px 16px 0px rgba(216, 182, 250, 0.4);
}

.card-md--dark:hover {
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.3);
}

.card-md--dark:hover .card-md__icon {
  box-shadow: 0px 0px 16px 0px rgba(139, 92, 246, 0.4);
}

/* Grid layout helper (for multiple cards) */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(394.5px, 1fr));
  gap: 24px;
  padding: 24px;
}

@media (max-width: 450px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
Usage Examples:
1. Basic Card:
html<div class="card-md">
  <div class="card-md__icon">
    <!-- Your icon SVG here -->
  </div>
  <div class="card-md__text">
    <h3 class="card-md__title">Your Title</h3>
    <p class="card-md__body">Your body text goes here</p>
  </div>
</div>
2. Dark Theme Card:
html<div class="card-md card-md--dark">
  <div class="card-md__icon">
    <!-- Your icon SVG here -->
  </div>
  <div class="card-md__text">
    <h3 class="card-md__title">Your Title</h3>
    <p class="card-md__body">Your body text goes here</p>
  </div>
</div>
3. Multiple Cards in Grid:
html<div class="card-grid">
  <div class="card-md">
    <!-- Card 1 -->
  </div>
  <div class="card-md">
    <!-- Card 2 -->
  </div>
  <div class="card-md">
    <!-- Card 3 -->
  </div>
</div>
Key Features:

✅ Fixed dimensions: 394.5px × 276px as per design
✅ Icon with glow: Circular icon container with purple shadow effect
✅ Typography: Matches Figma design exactly
✅ Responsive: Adapts to smaller screens
✅ Dark theme variant: Easy to switch to dark mode
✅ Hover effects: Smooth lift and enhanced shadow on hover
✅ Grid helper: CSS class for displaying multiple cards in a grid

Icon SVG Examples:
Here are some icon variations you can use (all 32×32):
html<!-- Chat Circles Icon -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M21.333 18.667h-8A2.667 2.667 0 0 1 10.666 16V8a2.667 2.667 0 0 1 2.667-2.667h8A2.667 2.667 0 0 1 24 8v8a2.667 2.667 0 0 1-2.667 2.667z" stroke="#AD4FC4" stroke-width="2"/>
  <path d="M10.666 13.333H8a2.667 2.667 0 0 0-2.667 2.667v8A2.667 2.667 0 0 0 8 26.667h2.667" stroke="#AD4FC4" stroke-width="2"/>
</svg>

<!-- Shield Icon -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16 5.333L6.666 9.333v8c0 5.773 4 11.174 9.334 12.5 5.333-1.326 9.333-6.727 9.333-12.5v-8L16 5.333z" stroke="#AD4FC4" stroke-width="2"/>
  <circle cx="16" cy="16" r="1.5" fill="#AD4FC4"/>
</svg>

<!-- Network Icon -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="8" r="2.667" stroke="#AD4FC4" stroke-width="2"/>
  <circle cx="8" cy="24" r="2.667" stroke="#AD4FC4" stroke-width="2"/>
  <circle cx="24" cy="24" r="2.667" stroke="#AD4FC4" stroke-width="2"/>
  <path d="M14.5 10L10 22M17.5 10L22 22" stroke="#AD4FC4" stroke-width="2"/>
</svg>
Note: Include the Inter font:
html<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
This card component is perfect for feature sections, service listings, or any content that needs a clean, modern card layout!DImplement this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=252-3015&m=devGet design contextRequest{
  `nodeId`: `252:3015`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst img16 = "https://www.figma.com/api/mcp/asset/36b79dd3-6f66-440f-9cca-f49813d2275a";
const img17 = "https://www.figma.com/api/mcp/asset/ca88a000-5e7d-4304-91e9-cb423a9cbcda";
const img18 = "https://www.figma.com/api/mcp/asset/71818e95-190b-43df-af67-79f355c3b784";
const imgColor2 = "https://www.figma.com/api/mcp/asset/aa757f5a-b463-4d18-a217-c94c9ebb5852";
const imgColor1 = "https://www.figma.com/api/mcp/asset/2a1be162-f4d1-482c-8939-b9ab5679b819";
const imgOutlines = "https://www.figma.com/api/mcp/asset/1ebe5b96-8500-4bd3-b14f-5fb5aa70f635";
const imgOutlines1 = "https://www.figma.com/api/mcp/asset/d05e2c84-850f-4255-b667-e76b0f609b9f";
const imgOutlines2 = "https://www.figma.com/api/mcp/asset/0dc59f42-dfef-4af8-aa53-f778017ec578";
const img = "https://www.figma.com/api/mcp/asset/3d81394d-99cd-46d9-83f7-836ead3e9d51";
const img1 = "https://www.figma.com/api/mcp/asset/c16614c8-7315-40fc-991f-e9b9c06b0df1";
const img2 = "https://www.figma.com/api/mcp/asset/6eeaf679-fb50-4395-8bc9-0f01a9c2ee3d";
const img3 = "https://www.figma.com/api/mcp/asset/a0ca4ac3-cc82-4073-8474-3fde6152eb21";
const img4 = "https://www.figma.com/api/mcp/asset/5871355a-00fe-4d07-a230-f1734953f0e5";
const img5 = "https://www.figma.com/api/mcp/asset/7c3afb8e-df35-447f-bd51-1082666dfc74";
const img6 = "https://www.figma.com/api/mcp/asset/1fa292ad-e09e-4ec5-a4af-991d74d65230";
const img7 = "https://www.figma.com/api/mcp/asset/d504c685-c68c-4f5a-87c4-69cf8158a894";
const img8 = "https://www.figma.com/api/mcp/asset/f3a19ff9-9a4e-461f-b38c-d5764274d6be";
const img9 = "https://www.figma.com/api/mcp/asset/96b7a7aa-8e66-40bc-b5a4-2fa9409e24df";
const img10 = "https://www.figma.com/api/mcp/asset/403790c7-3f9f-4604-9742-a06eddf1c0b0";
const img11 = "https://www.figma.com/api/mcp/asset/6195253a-60a9-4785-b02f-d7f4b7d12a4d";
const img12 = "https://www.figma.com/api/mcp/asset/077506ad-c36a-4b45-98db-bf3a2c71e1c3";
const img13 = "https://www.figma.com/api/mcp/asset/7a7d6a6b-0a54-43d3-a14a-4b6512203ded";
const img14 = "https://www.figma.com/api/mcp/asset/72cb913c-c74a-4d74-9a13-86dc791e257e";
const img15 = "https://www.figma.com/api/mcp/asset/d0af0793-7293-4641-ace0-6f158e373cb7";
type IllustrationProps = {
  className?: string;
  property1?: "apps" | "chats" | "privacy" | "wallet" | "Variant6" | "business";
};

function Illustration({ className, property1 = "chats" }: IllustrationProps) {
  return (
    <div data-node-id="85:2187" className={className}>
      <div data-node-id="85:2188" className="absolute contents inset-[8.34%_2.74%_8.34%_2.75%]" data-name="Product-Newsletter-01">
        <div data-node-id="85:2189" className="absolute inset-[8.34%_21.87%_24.33%_30.84%]" data-name="color 2">
          <img className="block max-w-none size-full" alt="" src={imgColor2} />
        </div>
        <div data-node-id="85:2195" className="absolute inset-[24.31%_6.72%_9.3%_15.89%]" data-name="color 1">
          <img className="block max-w-none size-full" alt="" src={imgColor1} />
        </div>
        <div data-node-id="85:2203" className="absolute inset-[8.34%_2.74%_8.34%_2.75%]" data-name="outlines">
          <div className="absolute inset-[-0.3%_-0.26%]">
            <img className="block max-w-none size-full" alt="" src={imgOutlines} />
          </div>
        </div>
      </div>
    </div>
  );
}
type CardlgProps = {
  ilustration?: React.ReactNode | null;
  state?: "default" | "hover";
};

export default function Cardlg({ ilustration = null, state = "default" }: CardlgProps) {
  const isDefault = state === "default";
  const isHover = state === "hover";
  return (
    <div id={isDefault ? "node-132_2088" : isHover ? "node-252_3016" : ""} className={`bg-gradient-to-r border border-[var(--colors\/outline\/02,#a1a1aa)] border-solid content-stretch flex flex-col gap-[var(--spacing\/super-lg,80px)] h-[395px] items-start overflow-clip p-[var(--spacing\/xl,24px)] relative rounded-[var(--corner-radius\/xxl,32px)] w-[629px] ${isDefault ? "from-[#f9fafb] to-[#f9fafb]" : isHover ? "from-[#e5e7eb] to-[#e5e7eb]" : ""}`}>
      <p id={isDefault ? "node-132_1556" : isHover ? "node-252_3017" : ""} className={`font-[family-name:var(--label\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/sm\\/font-weight,normal)] leading-[var(--label\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/accent,#ad4fc4)] text-[length:var(--label\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/label-sm,-0.5px)]`}>
        Technology
      </p>
      <div id={isDefault ? "node-132_1557" : isHover ? "node-252_3018" : ""} className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px pb-[var(--spacing\\/xl,24px)] pt-0 px-0 relative shrink-0 w-[387px]" data-name="content">
        <div id={isDefault ? "node-132_1558" : isHover ? "node-252_3019" : ""} className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="text">
          <p id={isDefault ? "node-132_1559" : isHover ? "node-252_3020" : ""} className={`font-[family-name:var(--heading\\/lg\\/font-family,"Sora:semibold",sans-serif)] font-[var(--heading\\/lg\\/font-weight,normal)] leading-[var(--heading\\/lg\\/line-height,44px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#04070b)] text-[length:var(--heading\\/lg\\/font-size,32px)] tracking-[var(--tracking\\/heading\\/heading-lg,-1px)] w-full`}>
            Title
          </p>
          <p id={isDefault ? "node-132_1560" : isHover ? "node-252_3021" : ""} className={`font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#172330)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] w-full`}>
            text
          </p>
        </div>
        <div id={isDefault ? "node-132_1561" : isHover ? "node-252_3022" : ""} className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
          <div id={isDefault ? "node-I132_1561-53_211" : isHover ? "node-I252_3022-53_211" : ""} className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
            <p id={isDefault ? "node-I132_1561-53_212" : isHover ? "node-I252_3022-53_212" : ""} className={`font-[family-name:var(--label\/md\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\/md\/font-weight,normal)] leading-[var(--label\/md\/line-height,24px)] relative shrink-0 text-[length:var(--label\/md\/font-size,16px)] tracking-[var(--tracking\/global\/label-md,-0.5px)] ${isDefault ? "text-[color:var(--colors\/text\/01,#04070b)]" : isHover ? "text-[color:var(--colors\/text\/action\/default,#003d7a)]" : ""}`}>
              button
            </p>
          </div>
          <div id={isDefault ? "node-I132_1561-53_508" : isHover ? "node-I252_3022-53_508" : ""} className="overflow-clip relative shrink-0 size-[24px]" data-name="type=regular">
            <div id={isDefault ? "node-I132_1561-53_508-71_1171" : isHover ? "node-I252_3022-53_508-71_1171" : ""} className="absolute inset-[18.75%_12.5%]" data-name="icon">
              <div className="absolute inset-0" style={(isDefault ? { "--fill-0": "rgba(4, 7, 11, 1)" } : isHover ? { "--fill-0": "rgba(0, 61, 122, 1)" } : undefined) as React.CSSProperties}>
                <img className="block max-w-none size-full" alt="" src={isDefault ? imgOutlines1 : isHover ? imgOutlines2 : ""} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDefault &&
        (ilustration || (
          <div className="absolute overflow-clip right-[-75px] size-[262px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="illustration" data-node-id="132:1958">
            <div className="absolute flex h-[261.055px] items-center justify-center right-[-38.6px] top-[calc(50%+0.29px)] translate-y-[-50%] w-[274.595px]">
              <div className="flex-none rotate-[252.348deg] scale-y-[-100%]">
                <div className="border-[0.675px] border-[var(--colors\/outline\/02,#172330)] border-solid h-[223.632px] relative rounded-[1012.361px] w-[202.79px]" data-name="illustration" data-node-id="I132:1958;132:1827">
                  <div className="absolute bg-[var(--colors\/surface\/02,#081016)] border-[0.54px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid left-[calc(50%+52.4px)] opacity-30 overflow-clip rounded-[364.45px] size-[139.307px] top-[calc(50%+49.38px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I132:1958;132:1828">
                    <div className="absolute flex items-center justify-center left-[-11.61px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1829">
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-2.84px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1830">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.94px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1831">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-11.98px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1832">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-3.2px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1833">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.57px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1834">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-11.92px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1835">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-3.15px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1836">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.62px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I132:1958;132:1837">
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute content-start flex flex-wrap gap-[13px_14.071px] items-start left-[calc(50%+-0.7px)] top-[calc(50%+-0.7px)] translate-x-[-50%] translate-y-[-50%] w-[92.871px]" data-node-id="I132:1958;132:1838">
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I132:1958;132:1839">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img2} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I132:1958;132:1858">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img3} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I132:1958;132:1877">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img4} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[46.607px] items-center justify-center left-[57.15px] top-[57.15px] w-[45.37px]">
                      <div className="flex-none rotate-[225.77deg]">
                        <div className="h-0 relative w-[65.043px]" data-node-id="I132:1958;132:1896">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img5} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[34.79px] items-center justify-center left-[99.37px] top-[59.97px] w-[15.154px]">
                      <div className="flex-none rotate-[246.463deg]">
                        <div className="h-0 relative w-[37.947px]" data-node-id="I132:1958;132:1897">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img6} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[16.801px] items-center justify-center left-[62.78px] top-[97.96px] w-[31.744px]">
                      <div className="flex-none rotate-[207.891deg]">
                        <div className="h-0 relative w-[35.916px]" data-node-id="I132:1958;132:1898">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img7} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center right-[-37.93px] size-[59.1px] top-[185.85px]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="relative size-[59.1px]" data-node-id="I132:1958;132:1899">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img8} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-[103.88px] size-[43.194px] top-[calc(50%+-80.37px)] translate-y-[-50%]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I132:1958;132:1918">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I132:1958;132:1919">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1920" />
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1921">
                            <img alt="" className="block max-w-none size-full" src={img9} />
                          </div>
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1924">
                            <img alt="" className="block max-w-none size-full" src={img10} />
                          </div>
                          <div className="relative shrink-0 size-[4.322px]" data-node-id="I132:1958;132:1927">
                            <img alt="" className="block max-w-none size-full" src={img11} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[139.36px] flex items-center justify-center left-[calc(50%+-40.47px)] size-[61.086px] translate-x-[-50%]">
                    <div className="flex-none rotate-[135deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I132:1958;132:1929">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I132:1958;132:1930">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1931" />
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1932">
                            <img alt="" className="block max-w-none size-full" src={img12} />
                          </div>
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1935">
                            <img alt="" className="block max-w-none size-full" src={img13} />
                          </div>
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1938" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[81.26px] flex items-center justify-center left-[calc(50%+-68.11px)] size-[43.194px] translate-x-[-50%]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I132:1958;132:1939">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I132:1958;132:1940">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1941" />
                          <div className="h-[21.065px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1942">
                            <img alt="" className="block max-w-none size-full" src={img14} />
                          </div>
                          <div className="h-[29.437px] relative shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1946">
                            <img alt="" className="block max-w-none size-full" src={img15} />
                          </div>
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I132:1958;132:1951" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[42.788px] items-center justify-center left-[calc(50%+-19.9px)] top-[131.19px] translate-x-[-50%] w-[54.609px]">
                    <div className="flex-none rotate-[38.08deg]">
                      <div className="h-0 relative w-[69.376px]" data-node-id="I132:1958;132:1952">
                        <div className="absolute inset-[-0.27px_-0.39%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img16} width="69.916" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[45.69px] items-center justify-center left-[calc(50%+-6.71px)] top-[71.09px] translate-x-[-50%] w-[37.401px]">
                    <div className="flex-none rotate-[50.696deg]">
                      <div className="h-0 relative w-[59.046px]" data-node-id="I132:1958;132:1953">
                        <div className="absolute inset-[-0.27px_-0.46%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img17} width="59.586" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[62.978px] items-center justify-center left-[calc(50%+52.64px)] top-[51.39px] translate-x-[-50%] w-[35.094px]">
                    <div className="flex-none rotate-[60.871deg]">
                      <div className="h-0 relative w-[72.095px]" data-node-id="I132:1958;132:1954">
                        <div className="absolute inset-[-0.27px_-0.37%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img18} width="72.635" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {isHover &&
        (ilustration || (
          <div className="absolute overflow-clip right-[-75px] size-[262px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="illustration" data-node-id="252:3023">
            <div className="absolute flex h-[261.055px] items-center justify-center right-[-38.6px] top-[calc(50%+0.29px)] translate-y-[-50%] w-[274.595px]">
              <div className="flex-none rotate-[252.348deg] scale-y-[-100%]">
                <div className="border-[0.675px] border-[var(--colors\/outline\/03,#3f3f46)] border-solid h-[223.632px] relative rounded-[1012.361px] w-[202.79px]" data-name="illustration" data-node-id="I252:3023;132:1827">
                  <div className="absolute bg-[var(--colors\/surface\/02,#081016)] border-[0.54px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid left-[calc(50%+52.4px)] opacity-30 overflow-clip rounded-[364.45px] size-[139.307px] top-[calc(50%+49.38px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I252:3023;132:1828">
                    <div className="absolute flex items-center justify-center left-[-11.61px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1829">
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-2.84px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1830">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.94px] size-[4.322px] top-[8.23px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1831">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-11.98px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1832">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-3.2px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1833">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.57px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1834">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-11.92px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1835">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-3.15px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1836">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[5.62px] size-[4.322px] top-[-1.21px]">
                      <div className="flex-none rotate-[4deg]">
                        <div className="relative size-[4.049px]" data-node-id="I252:3023;132:1837">
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute content-start flex flex-wrap gap-[13px_14.071px] items-start left-[calc(50%+-0.7px)] top-[calc(50%+-0.7px)] translate-x-[-50%] translate-y-[-50%] w-[92.871px]" data-node-id="I252:3023;132:1838">
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I252:3023;132:1839">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img2} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I252:3023;132:1858">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img3} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[39.4px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="relative size-[39.4px]" data-node-id="I252:3023;132:1877">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                              <img alt="" className="block max-w-none size-full" src={img4} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[46.607px] items-center justify-center left-[57.15px] top-[57.15px] w-[45.37px]">
                      <div className="flex-none rotate-[225.77deg]">
                        <div className="h-0 relative w-[65.043px]" data-node-id="I252:3023;132:1896">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img5} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[34.79px] items-center justify-center left-[99.37px] top-[59.97px] w-[15.154px]">
                      <div className="flex-none rotate-[246.463deg]">
                        <div className="h-0 relative w-[37.947px]" data-node-id="I252:3023;132:1897">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img6} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[16.801px] items-center justify-center left-[62.78px] top-[97.96px] w-[31.744px]">
                      <div className="flex-none rotate-[207.891deg]">
                        <div className="h-0 relative w-[35.916px]" data-node-id="I252:3023;132:1898">
                          <div className="absolute bottom-[-1.62px] left-0 right-0 top-[-1.62px]" style={{ "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                            <img alt="" className="block max-w-none size-full" src={img7} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center right-[-37.93px] size-[59.1px] top-[185.85px]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="relative size-[59.1px]" data-node-id="I252:3023;132:1899">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(4, 7, 11, 1)", "--stroke-0": "rgba(201, 135, 217, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img8} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-[103.88px] size-[43.194px] top-[calc(50%+-80.37px)] translate-y-[-50%]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I252:3023;132:1918">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I252:3023;132:1919">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1920" />
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1921">
                            <img alt="" className="block max-w-none size-full" src={img9} />
                          </div>
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1924">
                            <img alt="" className="block max-w-none size-full" src={img10} />
                          </div>
                          <div className="relative shrink-0 size-[4.322px]" data-node-id="I252:3023;132:1927">
                            <img alt="" className="block max-w-none size-full" src={img11} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[139.36px] flex items-center justify-center left-[calc(50%+-40.47px)] size-[61.086px] translate-x-[-50%]">
                    <div className="flex-none rotate-[135deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I252:3023;132:1929">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I252:3023;132:1930">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1931" />
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1932">
                            <img alt="" className="block max-w-none size-full" src={img12} />
                          </div>
                          <div className="h-[12.694px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1935">
                            <img alt="" className="block max-w-none size-full" src={img13} />
                          </div>
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1938" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[81.26px] flex items-center justify-center left-[calc(50%+-68.11px)] size-[43.194px] translate-x-[-50%]">
                    <div className="flex-none rotate-[90deg]">
                      <div className="bg-[var(--colors\/surface\/01,#0e0f0f)] border-[0.675px] border-[var(--colors\/outline\/accent,#c987d9)] border-solid opacity-[0.15] overflow-clip relative rounded-[269.963px] size-[43.194px]" data-node-id="I252:3023;132:1939">
                        <div className="absolute content-stretch flex gap-[3.375px] items-center left-[calc(50%+0.24px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I252:3023;132:1940">
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1941" />
                          <div className="h-[21.065px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1942">
                            <img alt="" className="block max-w-none size-full" src={img14} />
                          </div>
                          <div className="h-[29.437px] relative shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1946">
                            <img alt="" className="block max-w-none size-full" src={img15} />
                          </div>
                          <div className="h-[21.065px] shrink-0 w-[4.322px]" data-node-id="I252:3023;132:1951" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[42.788px] items-center justify-center left-[calc(50%+-19.9px)] top-[131.19px] translate-x-[-50%] w-[54.609px]">
                    <div className="flex-none rotate-[38.08deg]">
                      <div className="h-0 relative w-[69.376px]" data-node-id="I252:3023;132:1952">
                        <div className="absolute inset-[-0.27px_-0.39%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img16} width="69.916" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[45.69px] items-center justify-center left-[calc(50%+-6.71px)] top-[71.09px] translate-x-[-50%] w-[37.401px]">
                    <div className="flex-none rotate-[50.696deg]">
                      <div className="h-0 relative w-[59.046px]" data-node-id="I252:3023;132:1953">
                        <div className="absolute inset-[-0.27px_-0.46%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img17} width="59.586" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[62.978px] items-center justify-center left-[calc(50%+52.64px)] top-[51.39px] translate-x-[-50%] w-[35.094px]">
                    <div className="flex-none rotate-[60.871deg]">
                      <div className="h-0 relative w-[72.095px]" data-node-id="I252:3023;132:1954">
                        <div className="absolute inset-[-0.27px_-0.37%]">
                          <img alt="" className="block max-w-none size-full" height="0.54" src={img18} width="72.635" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/label/sm: Font(family: "label/sm/font-family", style: label/sm/font-weight, size: label/sm/font-size, weight: 600, lineHeight: label/sm/line-height, letterSpacing: tracking/global/label-sm), typography/heading/lg: Font(family: "heading/lg/font-family", style: heading/lg/font-weight, size: heading/lg/font-size, weight: 600, lineHeight: heading/lg/line-height, letterSpacing: tracking/heading/heading-lg), typography/body/sm: Font(family: "body/sm/font-family", style: body/sm/font-weight, size: body/sm/font-size, weight: 400, lineHeight: body/sm/line-height, letterSpacing: tracking/global/body-sm), typography/label/md: Font(family: "label/md/font-family", style: label/md/font-weight, size: label/md/font-size, weight: 600, lineHeight: label/md/line-height, letterSpacing: tracking/global/label-md).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `252:3015`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! I can see this is a large Card component with two states: default and hover. It features a category label, title, text, button with arrow, and a network illustration on the right side. Let me create clean HTML + CSS code for you.
card-lg.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Large Component</title>
  <link rel="stylesheet" href="card-lg.css">
</head>
<body>
  <!-- Card Large - Default State -->
  <div class="card-lg">
    <span class="card-lg__category">Technology</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Title</h2>
        <p class="card-lg__description">text</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">button</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Network Illustration -->
    <div class="card-lg__illustration">
      <svg class="card-lg__illustration-svg" viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Network nodes -->
        <g transform="translate(131, 131)">
          <!-- Center circle -->
          <circle cx="0" cy="0" r="30" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.3"/>
          
          <!-- Top node -->
          <circle cx="0" cy="-70" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="0" y1="-50" x2="0" y2="-30" stroke="#C987D9" stroke-width="0.5"/>
          
          <!-- Right node -->
          <circle cx="60" cy="-35" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="50" y1="-25" x2="25" y2="-15" stroke="#C987D9" stroke-width="0.5"/>
          
          <!-- Bottom right node -->
          <circle cx="50" cy="50" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="35" y1="40" x2="20" y2="20" stroke="#C987D9" stroke-width="0.5"/>
          
          <!-- Bottom left node -->
          <circle cx="-50" cy="50" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="-35" y1="40" x2="-20" y2="20" stroke="#C987D9" stroke-width="0.5"/>
          
          <!-- Left node -->
          <circle cx="-70" cy="0" r="25" stroke="#C987D9" stroke-width="1" fill="rgba(4, 7, 11, 1)"/>
          <line x1="-45" y1="0" x2="-30" y2="0" stroke="#C987D9" stroke-width="0.5"/>
          
          <!-- Small dots in center -->
          <circle cx="-8" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="0" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="8" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="-8" cy="5" r="2.5" fill="#C987D9"/>
          <circle cx="0" cy="5" r="2.5" fill="#C987D9"/>
          <circle cx="8" cy="5" r="2.5" fill="#C987D9"/>
        </g>
        
        <!-- Outer ellipse -->
        <ellipse cx="131" cy="131" rx="101" ry="112" stroke="#172330" stroke-width="1" fill="none" opacity="0.5"/>
      </svg>
    </div>
  </div>

  <!-- Card Large - Hover State -->
  <div class="card-lg card-lg--hover">
    <span class="card-lg__category">Technology</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Title</h2>
        <p class="card-lg__description">text</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">button</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Network Illustration -->
    <div class="card-lg__illustration">
      <svg class="card-lg__illustration-svg" viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(131, 131)">
          <circle cx="0" cy="0" r="30" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.3"/>
          <circle cx="0" cy="-70" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="0" y1="-50" x2="0" y2="-30" stroke="#C987D9" stroke-width="0.5"/>
          <circle cx="60" cy="-35" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="50" y1="-25" x2="25" y2="-15" stroke="#C987D9" stroke-width="0.5"/>
          <circle cx="50" cy="50" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="35" y1="40" x2="20" y2="20" stroke="#C987D9" stroke-width="0.5"/>
          <circle cx="-50" cy="50" r="20" stroke="#C987D9" stroke-width="1" fill="rgba(8, 16, 22, 0.3)" opacity="0.15"/>
          <line x1="-35" y1="40" x2="-20" y2="20" stroke="#C987D9" stroke-width="0.5"/>
          <circle cx="-70" cy="0" r="25" stroke="#C987D9" stroke-width="1" fill="rgba(4, 7, 11, 1)"/>
          <line x1="-45" y1="0" x2="-30" y2="0" stroke="#C987D9" stroke-width="0.5"/>
          <circle cx="-8" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="0" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="8" cy="-5" r="2.5" fill="#C987D9"/>
          <circle cx="-8" cy="5" r="2.5" fill="#C987D9"/>
          <circle cx="0" cy="5" r="2.5" fill="#C987D9"/>
          <circle cx="8" cy="5" r="2.5" fill="#C987D9"/>
        </g>
        <ellipse cx="131" cy="131" rx="101" ry="112" stroke="#3f3f46" stroke-width="1" fill="none" opacity="0.5"/>
      </svg>
    </div>
  </div>
</body>
</html>
card-lg.css
css/* Base Card Large Styles */
.card-lg {
  background: linear-gradient(to right, #f9fafb, #f9fafb);
  border: 1px solid #a1a1aa;
  display: flex;
  flex-direction: column;
  gap: 80px;
  height: 395px;
  padding: 24px;
  border-radius: 32px;
  width: 629px;
  overflow: hidden;
  position: relative;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

/* Hover State */
.card-lg--hover,
.card-lg:hover {
  background: linear-gradient(to right, #e5e7eb, #e5e7eb);
}

/* Category Label */
.card-lg__category {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #ad4fc4;
  flex-shrink: 0;
}

/* Content Container */
.card-lg__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  width: 387px;
  padding-bottom: 24px;
  min-height: 0;
  flex-shrink: 0;
}

/* Text Section */
.card-lg__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  white-space: pre-wrap;
  flex-shrink: 0;
}

/* Title */
.card-lg__title {
  font-family: 'Sora', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -1px;
  color: #04070b;
  margin: 0;
  width: 100%;
}

/* Description */
.card-lg__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #172330;
  margin: 0;
  width: 100%;
}

/* Button */
.card-lg__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 4px;
  border-radius: 16px;
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.2s ease;
}

.card-lg__button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.card-lg__button-text {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #04070b;
  padding: 0 8px;
  transition: color 0.2s ease;
}

.card-lg--hover .card-lg__button-text,
.card-lg:hover .card-lg__button-text {
  color: #003d7a;
}

.card-lg__button-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: #04070b;
  transition: color 0.2s ease;
}

.card-lg--hover .card-lg__button-icon,
.card-lg:hover .card-lg__button-icon {
  color: #003d7a;
}

/* Illustration */
.card-lg__illustration {
  position: absolute;
  right: -75px;
  top: 50%;
  transform: translateY(-50%);
  width: 262px;
  height: 262px;
  overflow: hidden;
  pointer-events: none;
}

.card-lg__illustration-svg {
  width: 100%;
  height: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-lg {
    width: 100%;
    max-width: 629px;
    height: auto;
    min-height: 395px;
  }
  
  .card-lg__content {
    width: 100%;
    max-width: 387px;
  }
  
  .card-lg__illustration {
    right: -100px;
    opacity: 0.5;
  }
}

@media (max-width: 480px) {
  .card-lg__illustration {
    display: none;
  }
}

/* Dark theme variant (optional) */
.card-lg--dark {
  background: linear-gradient(to right, #0e1820, #0e1820);
  border-color: #3f3f46;
}

.card-lg--dark:hover,
.card-lg--dark.card-lg--hover {
  background: linear-gradient(to right, #172330, #172330);
}

.card-lg--dark .card-lg__title {
  color: #fafafa;
}

.card-lg--dark .card-lg__description {
  color: #d4d4d8;
}

.card-lg--dark .card-lg__button-text,
.card-lg--dark .card-lg__button-icon {
  color: #fafafa;
}

.card-lg--dark:hover .card-lg__button-text,
.card-lg--dark.card-lg--hover .card-lg__button-text,
.card-lg--dark:hover .card-lg__button-icon,
.card-lg--dark.card-lg--hover .card-lg__button-icon {
  color: #60a5fa;
}

/* Animation for button hover */
.card-lg__button:hover .card-lg__button-icon {
  transform: translateX(4px);
}
Usage Examples:
1. Default Card:
html<div class="card-lg">
  <span class="card-lg__category">Technology</span>
  <div class="card-lg__content">
    <div class="card-lg__text">
      <h2 class="card-lg__title">Decentralized Network</h2>
      <p class="card-lg__description">Built on blockchain technology for maximum security and privacy.</p>
    </div>
    <button class="card-lg__button">
      <span class="card-lg__button-text">Learn More</span>
      <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
  <div class="card-lg__illustration">
    <!-- SVG illustration -->
  </div>
</div>
2. Dark Theme Card:
html<div class="card-lg card-lg--dark">
  <!-- Same content as above -->
</div>
3. Hover State (for testing):
html<div class="card-lg card-lg--hover">
  <!-- Same content as above -->
</div>
Key Features:

✅ Two states: Default and hover with background color change
✅ Fixed dimensions: 629px × 395px
✅ Network illustration: Positioned on right side, overflows the card
✅ Interactive button: Changes color on hover with arrow icon
✅ Typography: Uses Sora for heading, Inter for body text
✅ Responsive: Adapts to smaller screens
✅ Dark theme variant: Optional dark mode styling
✅ Smooth transitions: All hover effects are animated

Required Fonts:
html<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Sora:wght@600&display=swap" rel="stylesheet">
Note: The illustration SVG is simplified for clarity. You can replace it with the actual network illustration from your design assets or customize it further to match your exact needs!DImplement this component, checking all props and variants.
@https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=252-3015&m=devDO this again, I swapped the illustration for a png image.Get design contextRequest{
  `nodeId`: `252:3015`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Responseconst imgOutlines3 = "https://www.figma.com/api/mcp/asset/2fd85541-8ac4-4953-a875-f7e5b5d0a802";
const imgColor2 = "https://www.figma.com/api/mcp/asset/5b58f14e-72ba-49d8-b09e-b874c47cc641";
const imgColor1 = "https://www.figma.com/api/mcp/asset/6f631225-2078-4ece-a7a7-30236e077399";
const imgOutlines = "https://www.figma.com/api/mcp/asset/012d171e-1117-47bf-92f8-6bbd3b57c153";
const imgOutlines1 = "https://www.figma.com/api/mcp/asset/1d9a28f6-2f4f-4e54-9a60-d0c9c6b3f87b";
const imgOutlines2 = "https://www.figma.com/api/mcp/asset/456a50c8-d139-4cfa-8fe0-227ed32a916b";
type IllustrationProps = {
  className?: string;
  property1?: "apps" | "chats" | "privacy" | "wallet" | "Variant6" | "business";
};

function Illustration({ className, property1 = "chats" }: IllustrationProps) {
  return (
    <div data-node-id="85:2187" className={className}>
      <div data-node-id="85:2188" className="absolute contents inset-[8.34%_2.74%_8.34%_2.75%]" data-name="Product-Newsletter-01">
        <div data-node-id="85:2189" className="absolute inset-[8.34%_21.87%_24.33%_30.84%]" data-name="color 2">
          <img className="block max-w-none size-full" alt="" src={imgColor2} />
        </div>
        <div data-node-id="85:2195" className="absolute inset-[24.31%_6.72%_9.3%_15.89%]" data-name="color 1">
          <img className="block max-w-none size-full" alt="" src={imgColor1} />
        </div>
        <div data-node-id="85:2203" className="absolute inset-[8.34%_2.74%_8.34%_2.75%]" data-name="outlines">
          <div className="absolute inset-[-0.3%_-0.26%]">
            <img className="block max-w-none size-full" alt="" src={imgOutlines} />
          </div>
        </div>
      </div>
    </div>
  );
}
type CardlgProps = {
  state?: "default" | "hover";
};

export default function Cardlg({ state = "default" }: CardlgProps) {
  const isDefault = state === "default";
  const isHover = state === "hover";
  return (
    <div id={isDefault ? "node-132_2088" : isHover ? "node-252_3016" : ""} className={`bg-gradient-to-r border border-[var(--colors\/outline\/02,#a1a1aa)] border-solid content-stretch flex flex-col gap-[var(--spacing\/super-lg,80px)] h-[395px] items-start overflow-clip p-[var(--spacing\/xl,24px)] relative rounded-[var(--corner-radius\/xxl,32px)] w-[629px] ${isDefault ? "from-[#f9fafb] to-[#f9fafb]" : isHover ? "from-[#e5e7eb] to-[#e5e7eb]" : ""}`}>
      <p id={isDefault ? "node-132_1556" : isHover ? "node-252_3017" : ""} className={`font-[family-name:var(--label\\/sm\\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\\/sm\\/font-weight,normal)] leading-[var(--label\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/accent,#ad4fc4)] text-[length:var(--label\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/label-sm,-0.5px)]`}>
        Technology
      </p>
      <div id={isDefault ? "node-132_1557" : isHover ? "node-252_3018" : ""} className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px pb-[var(--spacing\\/xl,24px)] pt-0 px-0 relative shrink-0 w-[387px]" data-name="content">
        <div id={isDefault ? "node-132_1558" : isHover ? "node-252_3019" : ""} className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="text">
          <p id={isDefault ? "node-132_1559" : isHover ? "node-252_3020" : ""} className={`font-[family-name:var(--heading\\/lg\\/font-family,"Sora:semibold",sans-serif)] font-[var(--heading\\/lg\\/font-weight,normal)] leading-[var(--heading\\/lg\\/line-height,44px)] relative shrink-0 text-[color:var(--colors\\/text\\/01,#04070b)] text-[length:var(--heading\\/lg\\/font-size,32px)] tracking-[var(--tracking\\/heading\\/heading-lg,-1px)] w-full`}>
            Title
          </p>
          <p id={isDefault ? "node-132_1560" : isHover ? "node-252_3021" : ""} className={`font-[family-name:var(--body\\/sm\\/font-family,"Inter:regular",sans-serif)] font-[var(--body\\/sm\\/font-weight,normal)] leading-[var(--body\\/sm\\/line-height,20px)] relative shrink-0 text-[color:var(--colors\\/text\\/02,#172330)] text-[length:var(--body\\/sm\\/font-size,14px)] tracking-[var(--tracking\\/global\\/body-sm,0px)] w-full`}>
            text
          </p>
        </div>
        <div id={isDefault ? "node-132_1561" : isHover ? "node-252_3022" : ""} className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center p-[var(--spacing\\/xxs,4px)] relative rounded-[var(--corner-radius\\/lg,16px)] shrink-0" data-name="btn-md">
          <div id={isDefault ? "node-I132_1561-53_211" : isHover ? "node-I252_3022-53_211" : ""} className="content-stretch flex gap-[var(--spacing\\/none,0px)] items-center justify-center px-[var(--spacing\\/xs,8px)] py-[var(--spacing\\/none,0px)] relative shrink-0" data-name="label">
            <p id={isDefault ? "node-I132_1561-53_212" : isHover ? "node-I252_3022-53_212" : ""} className={`font-[family-name:var(--label\/md\/font-family,"Inter:semibold",sans-serif)] font-[var(--label\/md\/font-weight,normal)] leading-[var(--label\/md\/line-height,24px)] relative shrink-0 text-[length:var(--label\/md\/font-size,16px)] tracking-[var(--tracking\/global\/label-md,-0.5px)] ${isDefault ? "text-[color:var(--colors\/text\/01,#04070b)]" : isHover ? "text-[color:var(--colors\/text\/action\/default,#003d7a)]" : ""}`}>
              button
            </p>
          </div>
          <div id={isDefault ? "node-I132_1561-53_508" : isHover ? "node-I252_3022-53_508" : ""} className="overflow-clip relative shrink-0 size-[24px]" data-name="type=regular">
            <div id={isDefault ? "node-I132_1561-53_508-71_1171" : isHover ? "node-I252_3022-53_508-71_1171" : ""} className="absolute inset-[18.75%_12.5%]" data-name="icon">
              <div className="absolute inset-0" style={(isDefault ? { "--fill-0": "rgba(4, 7, 11, 1)" } : isHover ? { "--fill-0": "rgba(0, 61, 122, 1)" } : undefined) as React.CSSProperties}>
                <img className="block max-w-none size-full" alt="" src={isDefault ? imgOutlines1 : isHover ? imgOutlines2 : ""} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={isDefault ? "node-255_6633" : isHover ? "node-255_6641" : ""} className="absolute right-[-75px] size-[262px] top-[calc(50%+-0.5px)] translate-y-[-50%]" data-name="illustration-tech 1">
        <img className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" alt="" src={imgOutlines3} />
      </div>
    </div>
  );
}ResponseSUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
ResponseNode ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.ResponseThese styles are contained in the design: typography/label/sm: Font(family: "label/sm/font-family", style: label/sm/font-weight, size: label/sm/font-size, weight: 600, lineHeight: label/sm/line-height, letterSpacing: tracking/global/label-sm), typography/heading/lg: Font(family: "heading/lg/font-family", style: heading/lg/font-weight, size: heading/lg/font-size, weight: 600, lineHeight: heading/lg/line-height, letterSpacing: tracking/heading/heading-lg), typography/body/sm: Font(family: "body/sm/font-family", style: body/sm/font-weight, size: body/sm/font-size, weight: 400, lineHeight: body/sm/line-height, letterSpacing: tracking/global/body-sm), typography/label/md: Font(family: "label/md/font-family", style: label/md/font-weight, size: label/md/font-size, weight: 600, lineHeight: label/md/line-height, letterSpacing: tracking/global/label-md).ResponseImages and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.ResponseIMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.Get screenshotRequest{
  `nodeId`: `252:3015`,
  `fileKey`: `vbQCPz3r1LHLDnTJ1z6cZd`,
  `clientLanguages`: `html,css`,
  `clientFrameworks`: `unknown`
}Perfect! Now I can see the component uses a PNG image for the illustration. Let me create the updated HTML + CSS code with the PNG image support.
card-lg.html
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Large Component</title>
  <link rel="stylesheet" href="card-lg.css">
</head>
<body>
  <!-- Card Large - Default State -->
  <div class="card-lg">
    <span class="card-lg__category">Technology</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Title</h2>
        <p class="card-lg__description">text</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">button</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Illustration Image -->
    <div class="card-lg__illustration">
      <img src="illustration-tech.png" alt="Network Illustration" class="card-lg__illustration-img">
    </div>
  </div>

  <!-- Card Large - Hover State -->
  <div class="card-lg card-lg--hover">
    <span class="card-lg__category">Technology</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Title</h2>
        <p class="card-lg__description">text</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">button</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Illustration Image -->
    <div class="card-lg__illustration">
      <img src="illustration-tech.png" alt="Network Illustration" class="card-lg__illustration-img">
    </div>
  </div>

  <!-- Example with different content -->
  <div class="card-lg">
    <span class="card-lg__category">Security</span>
    
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Decentralized Network</h2>
        <p class="card-lg__description">Built on blockchain technology for maximum security and privacy</p>
      </div>
      
      <button class="card-lg__button">
        <span class="card-lg__button-text">Learn More</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <div class="card-lg__illustration">
      <img src="illustration-tech.png" alt="Network Illustration" class="card-lg__illustration-img">
    </div>
  </div>
</body>
</html>
card-lg.css
css/* Base Card Large Styles */
.card-lg {
  background: linear-gradient(to right, #f9fafb, #f9fafb);
  border: 1px solid #a1a1aa;
  display: flex;
  flex-direction: column;
  gap: 80px;
  height: 395px;
  padding: 24px;
  border-radius: 32px;
  width: 629px;
  overflow: hidden;
  position: relative;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

/* Hover State */
.card-lg--hover,
.card-lg:hover {
  background: linear-gradient(to right, #e5e7eb, #e5e7eb);
}

/* Category Label */
.card-lg__category {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #ad4fc4;
  flex-shrink: 0;
  z-index: 2;
  position: relative;
}

/* Content Container */
.card-lg__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  width: 387px;
  padding-bottom: 24px;
  min-height: 0;
  flex-shrink: 0;
  z-index: 2;
  position: relative;
}

/* Text Section */
.card-lg__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  white-space: pre-wrap;
  flex-shrink: 0;
}

/* Title */
.card-lg__title {
  font-family: 'Sora', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -1px;
  color: #04070b;
  margin: 0;
  width: 100%;
}

/* Description */
.card-lg__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #172330;
  margin: 0;
  width: 100%;
}

/* Button */
.card-lg__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 4px;
  border-radius: 16px;
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.2s ease;
}

.card-lg__button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.card-lg__button-text {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #04070b;
  padding: 0 8px;
  transition: color 0.2s ease;
}

.card-lg--hover .card-lg__button-text,
.card-lg:hover .card-lg__button-text {
  color: #003d7a;
}

.card-lg__button-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: #04070b;
  transition: all 0.2s ease;
}

.card-lg--hover .card-lg__button-icon,
.card-lg:hover .card-lg__button-icon {
  color: #003d7a;
}

.card-lg__button:hover .card-lg__button-icon {
  transform: translateX(4px);
}

/* Illustration Container */
.card-lg__illustration {
  position: absolute;
  right: -75px;
  top: 50%;
  transform: translateY(-50%);
  width: 262px;
  height: 262px;
  overflow: visible;
  pointer-events: none;
  z-index: 1;
}

/* Illustration Image */
.card-lg__illustration-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  pointer-events: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-lg {
    width: 100%;
    max-width: 629px;
    height: auto;
    min-height: 395px;
  }
  
  .card-lg__content {
    width: 100%;
    max-width: 387px;
  }
  
  .card-lg__illustration {
    right: -100px;
    opacity: 0.5;
  }
}

@media (max-width: 480px) {
  .card-lg {
    gap: 40px;
  }
  
  .card-lg__illustration {
    right: -120px;
    opacity: 0.3;
    width: 200px;
    height: 200px;
  }
}

/* Dark theme variant (optional) */
.card-lg--dark {
  background: linear-gradient(to right, #0e1820, #0e1820);
  border-color: #3f3f46;
}

.card-lg--dark:hover,
.card-lg--dark.card-lg--hover {
  background: linear-gradient(to right, #172330, #172330);
}

.card-lg--dark .card-lg__title {
  color: #fafafa;
}

.card-lg--dark .card-lg__description {
  color: #d4d4d8;
}

.card-lg--dark .card-lg__button-text,
.card-lg--dark .card-lg__button-icon {
  color: #fafafa;
}

.card-lg--dark:hover .card-lg__button-text,
.card-lg--dark.card-lg--hover .card-lg__button-text,
.card-lg--dark:hover .card-lg__button-icon,
.card-lg--dark.card-lg--hover .card-lg__button-icon {
  color: #60a5fa;
}

/* Grid layout helper (for multiple cards) */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(629px, 1fr));
  gap: 24px;
  padding: 24px;
}

@media (max-width: 680px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
Usage Examples:
1. Basic Card with PNG Illustration:
html<div class="card-lg">
  <span class="card-lg__category">Technology</span>
  <div class="card-lg__content">
    <div class="card-lg__text">
      <h2 class="card-lg__title">Decentralized Network</h2>
      <p class="card-lg__description">Built on blockchain technology for maximum security and privacy.</p>
    </div>
    <button class="card-lg__button">
      <span class="card-lg__button-text">Learn More</span>
      <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
  <div class="card-lg__illustration">
    <img src="your-illustration.png" alt="Illustration" class="card-lg__illustration-img">
  </div>
</div>
2. Dark Theme Card:
<div class="card-lg card-lg--dark">
  <!-- Same structure as above -->
</div>
3. multiple cards in grid:
<div class="card-grid">
  <div class="card-lg">
    <span class="card-lg__category">Technology</span>
    <div class="card-lg__content">
      <div class="card-lg__text">
        <h2 class="card-lg__title">Feature 1</h2>
        <p class="card-lg__description">Description 1</p>
      </div>
      <button class="card-lg__button">
        <span class="card-lg__button-text">Explore</span>
        <svg class="card-lg__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
    </div>
    <div class="card-lg__illustration">
      <img src="illustration-1.png" alt="" class="card-lg__illustration-img">
    </div>
  </div>
  
  <div class="card-lg">
    <!-- Card 2 -->
  </div>
</div>


Key Features:

✅ Two states: Default and hover with background color change
✅ PNG illustration support: Uses <img> tag for easy image swapping
✅ Fixed dimensions: 629px × 395px
✅ Proper z-index layering: Content appears above illustration
✅ Interactive button: Changes color on hover with animated arrow
✅ Typography: Uses Sora for heading, Inter for body text
✅ Responsive: Adapts to smaller screens
✅ Dark theme variant: Optional dark mode styling
✅ Smooth transitions: All hover effects are animated