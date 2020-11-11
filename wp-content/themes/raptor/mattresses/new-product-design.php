<?php /* Template Name: Mattresses New */ ?>
<?php add_action('wp_head', 'add_reviews_js'); ?>
<?php get_header() ?>
<?php
$hero = get_field('hero');
$features = get_field('features');
$cards = get_field('product_cards');
$technology = get_field('technology');
?>
	<div class="main">
		<div class="product-hero" id="product-overview">
			<div class="product-hero__bg">
				<picture>
					<source media="(max-width: 768px)" srcset="<?= $hero['img_mob']['url'] ?? ''?> 1x, <?= $hero['img_mob_2x']['url'] ?? ''?> 2x"><img src="<?= $hero['img']['url'] ?? ''?>" srcset="<?= $hero['img_2x']['url'] ?? ''?> 2x"/>
				</picture>
			</div>
			<div class="product-hero__head">
				<div class="product-hero__brand"><img src="<?= $hero['brand_img']['url'] ?? ''?>" alt=""></div>
				<div class="product-hero__logo"><img src="<?= $hero['product_logo']['url'] ?? ''?>" srcset="<?= $hero['product_logo_2x']['url'] ?? ''?> 2x"/>
				</div>
			</div>
			<div class="content">
				<h6><?= $hero['subtitle'] ?? ''?></h6>
				<h2><?= $hero['title'] ?? ''?></h2>
				<p><?= $hero['text'] ?? ''?></p>
			</div><a class="product-hero-btn" href="<?= $hero['cta']['url'] ?? ''?>"><span class="product-hero-btn__icon"><span class="product-hero-btn__icon-inn"></span></span><?= $hero['cta']['title'] ?? ''?></a>
		</div>
        <div class="feature-wrap">
            <?php if(!empty($features)) :?>
                <?php foreach ($features as $feature) :?>
                    <div class="feature-card">
                        <div class="feature-card__icon"><img src="<?= $feature['img']['url'] ?? ''?>" srcset="<?= $feature['img_2x']['url'] ?? ''?> 2x"/>
                        </div>
                        <div class="feature-card__text"><?= $feature['text'] ?? ''?></div>
                    </div>
                <?php endforeach;?>
            <?php endif; ?>
        </div>
		<div id="product-features">
			<div class="shift-card-wrap">
				<?php if(!empty($cards)) :?>
					<?php foreach ($cards as $card) :?>
						<div class="shift-card">
							<div class="shift-card__img"><img src="<?= $card['img']['url'] ?? ''?>" srcset="<?= $card['img_2x']['url'] ?? ''?> 2x"/>
							</div>
							<div class="shift-card__content">
								<div class="shift-card__content-inner">
									<h5 class="shift-card__title"><?= $card['title']?></h5>
									<p class="shift-card__text"><?= $card['text']?></p>
								</div>
							</div>
						</div>
					<?php endforeach;?>
				<?php endif; ?>
			</div>
		</div>
		<div id="product-technology">
			<div class="bg-block">
				<div class="sleepmaker-advance">
					<div class="sleepmaker-advance__info js-text-collapse-wrap">
						<?php if(!empty($technology['specs'])) :?>
							<?php foreach ($technology['specs'] as $spec) :?>
								<div class="advance-card js-text-collapse-item">
									<div class="advance-card__header">
										<?php if(!empty($spec['icon_type']) && $spec['icon_type'] != null) :?>
											<?php switch ($spec['icon_type']) :
												case 'reduce' :?>
													<div class="advance-card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="29" viewBox="0 0 36 29">
															<g fill="currentColor">
																<path d="M6.427 28.894c-1.837 0-3.51-1.577-4.704-4.44C.612 21.796 0 18.277 0 14.546s.612-7.25 1.723-9.91C2.918 1.774 4.59.197 6.427.197c1.838 0 3.51 1.577 4.707 4.44 1.11 2.66 1.722 6.179 1.722 9.91 0 3.73-.611 7.25-1.722 9.908-1.197 2.863-2.867 4.44-4.707 4.44zm0-27.232c-1.182 0-2.4 1.289-3.338 3.535-1.037 2.485-1.61 5.805-1.61 9.349 0 3.543.573 6.862 1.61 9.346.938 2.247 2.156 3.536 3.338 3.536s2.4-1.289 3.339-3.536c1.039-2.484 1.611-5.804 1.611-9.346s-.572-6.864-1.611-9.349c-.939-2.246-2.155-3.535-3.339-3.535z"/>
																<path d="M8.147 25.031c-.297 0-.565-.175-.68-.446-1.151-2.674-1.78-6.24-1.78-10.04 0-3.628.584-7.075 1.645-9.708.082-.263.306-.458.58-.506.274-.047.551.063.718.283.167.22.195.515.072.762-.986 2.464-1.535 5.719-1.535 9.166 0 3.607.59 6.969 1.66 9.466.16.373-.016.802-.39.961-.092.04-.19.06-.29.062zM12.117 28.894c-.715-.009-1.409-.236-1.988-.652-.336-.23-.42-.687-.188-1.02.233-.334.694-.417 1.03-.187.333.246.735.383 1.15.393 1.183 0 2.4-1.289 3.34-3.536 1.037-2.484 1.609-5.804 1.609-9.346s-.577-6.864-1.618-9.349c-.935-2.246-2.153-3.535-3.335-3.535-.22 0-.437.042-.641.122-.248.102-.533.063-.743-.102-.21-.166-.314-.43-.27-.693.042-.263.226-.482.478-.572.375-.145.773-.22 1.176-.221 1.838 0 3.508 1.577 4.704 4.44 1.112 2.66 1.723 6.179 1.723 9.91 0 3.73-.611 7.25-1.723 9.908-1.196 2.863-2.866 4.44-4.704 4.44z"/>
																<path d="M17.753 28.699c-.714-.01-1.408-.237-1.987-.652-.336-.23-.42-.687-.188-1.02.232-.334.693-.418 1.03-.187.333.245.735.382 1.15.392 1.182 0 2.4-1.288 3.339-3.535 1.037-2.485 1.61-5.805 1.61-9.347s-.576-6.856-1.613-9.348c-.939-2.247-2.157-3.536-3.34-3.536-.22.001-.437.043-.642.122-.378.135-.795-.053-.94-.424-.145-.372.035-.79.406-.942.375-.145.773-.22 1.175-.222 1.838 0 3.508 1.577 4.705 4.441 1.111 2.66 1.723 6.178 1.723 9.91 0 3.73-.612 7.25-1.723 9.908-1.195 2.863-2.865 4.44-4.705 4.44z"/>
																<path d="M23.607 28.699c-.714-.009-1.408-.237-1.986-.652-.217-.149-.338-.401-.317-.662.021-.262.181-.492.42-.604.239-.112.52-.09.737.059.334.245.736.382 1.151.392 1.184 0 2.4-1.288 3.339-3.535 1.037-2.485 1.609-5.805 1.609-9.347s-.577-6.856-1.614-9.348c-.939-2.247-2.155-3.536-3.339-3.536-.219.001-.436.043-.64.122-.247.102-.532.063-.742-.102-.21-.165-.314-.43-.27-.693.042-.262.226-.481.478-.571.374-.146.772-.22 1.174-.222 1.838 0 3.516 1.577 4.705 4.441 1.111 2.66 1.723 6.178 1.723 9.91 0 3.73-.612 7.25-1.723 9.908-1.189 2.863-2.867 4.44-4.705 4.44zM35.178 15.77h-.016c-.409-.01-.733-.344-.725-.749v-.67c0-3.544-.572-6.865-1.611-9.35-.926-2.246-2.142-3.535-3.326-3.535-.219.001-.436.043-.64.122-.247.102-.531.063-.742-.102-.21-.165-.314-.43-.27-.693.043-.262.226-.481.479-.571C28.7.077 29.099.002 29.5 0c1.84 0 3.51 1.577 4.707 4.441 1.11 2.66 1.722 6.178 1.722 9.91v.7c-.008.403-.344.725-.75.718zM12.658 6.76c-.077-.27-.058-.557.052-.815.183-.489.852-2.222 1.069-2.481 0 0 .894 1.223.86 1.396 0 0-1.164 2.933-1.339 4.917l-.642-3.017zM12.658 21.972c-.077.27-.058.556.052.814.183.489.852 2.222 1.069 2.481 0 0 .894-1.223.86-1.394 0 0-1.164-2.933-1.339-4.919l-.642 3.018zM18.372 21.972c-.077.27-.058.556.052.814.183.489.852 2.222 1.069 2.481 0 0 .894-1.223.86-1.394 0 0-1.165-2.933-1.339-4.919l-.642 3.018zM18.372 6.76c-.077-.27-.058-.557.052-.815.183-.489.852-2.222 1.069-2.481 0 0 .894 1.223.86 1.396 0 0-1.165 2.933-1.339 4.917l-.642-3.017z"/>
																<path d="M24.054 6.76c-.076-.27-.057-.557.053-.815.182-.489.851-2.222 1.068-2.481 0 0 .896 1.223.86 1.396 0 0-1.164 2.933-1.338 4.917l-.643-3.017z"/>
															</g>
														</svg>
													</div>
													<?php break; ?>
												<?php case 'support' :?>
													<div class="advance-card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
															<g fill="currentColor">
																<path d="M1.441 25.71c-.274 0-.496-.228-.496-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.049.267-.142.364-.094.097-.22.151-.354.151zM3.72 25.71c-.275 0-.497-.228-.497-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.05.267-.143.364-.093.097-.22.151-.353.151zM6.177 25.71c-.274 0-.496-.228-.496-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.05.267-.143.364-.093.097-.22.151-.353.151zM8.605 25.71c-.274 0-.496-.228-.496-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.05.267-.143.364-.093.097-.22.151-.353.151zM11.062 25.866c-.274 0-.496-.227-.496-.508V9.032c0-.281.222-.509.496-.509s.496.228.496.509v16.326c0 .28-.222.508-.496.508zM13.43 25.71c-.275 0-.497-.228-.497-.509V8.97c0-.28.222-.508.496-.508s.496.228.496.508v16.225c.002.136-.05.267-.143.364-.093.097-.22.151-.353.151zM15.887 25.71c-.274 0-.496-.228-.496-.509V8.97c0-.28.222-.508.496-.508s.496.228.496.508v16.225c.002.136-.05.267-.143.364-.093.097-.22.151-.353.151zM18.448 25.71c-.274 0-.496-.228-.496-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.05.267-.143.364-.093.097-.22.151-.353.151zM20.772 25.71c-.274 0-.496-.228-.496-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.05.267-.142.364-.094.097-.22.151-.354.151zM23.14 25.71c-.275 0-.497-.228-.497-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.05.267-.142.364-.094.097-.221.151-.354.151zM25.567 25.71c-.274 0-.496-.228-.496-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.05.267-.143.364-.093.097-.22.151-.353.151zM27.965 25.71c-.274 0-.496-.228-.496-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.05.267-.143.364-.093.097-.22.151-.353.151zM30.453 25.71c-.274 0-.496-.228-.496-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.05.267-.143.364-.093.097-.22.151-.353.151zM32.961 25.71c-.274 0-.496-.228-.496-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.05.267-.142.364-.094.097-.22.151-.354.151zM35.433 25.71c-.274 0-.496-.228-.496-.509V8.266c0-.28.222-.508.496-.508s.496.227.496.508v16.928c.002.136-.05.267-.143.364-.093.097-.22.151-.353.151z"/>
																<path fill="#2E1A47" d="M12.23 11.847c-1.049 0-2.167-.385-2.904-1.472-.193-.29-.34-.611-.435-.95-.06-.226-.16-.438-.296-.626-.06.026-.117.057-.17.093l-.083.054c-1.579 1.07-3.26 1.453-4.979 1.162C2.227 9.898.073 8.843 0 6.302c-.021-.722.533-1.324 1.237-1.346.705-.022 1.293.546 1.314 1.268.03 1.072 1.196 1.296 1.246 1.307 1.6.278 2.758-.505 3.138-.764l.129-.084c1.027-.665 1.87-.566 2.398-.365 1.15.436 1.665 1.66 1.87 2.352.02.077.05.15.09.218.345.507 1.157.32 1.317.279.126-.032.254-.056.383-.07.598-.071 1.842-.548 3.31-1.272.911-.45 1.927-.63 2.933-.52 1.779.197 3.621.986 4.331 1.307.103.05.21.091.32.122 1.701.436 3.666-.82 4.043-1.075.178-.123.364-.235.555-.335 2.855-1.463 6.095-1.162 6.227-1.152.697.072 1.206.708 1.14 1.423-.065.715-.682 1.242-1.38 1.18-.037 0-2.664-.231-4.846.887-.098.053-.192.113-.283.177-2.889 1.955-5.207 1.652-6.07 1.431-.258-.068-.51-.16-.753-.276-.466-.216-2.102-.935-3.555-1.098-.535-.06-1.075.037-1.559.279-1.818.895-3.204 1.403-4.12 1.512h-.047c-.371.102-.753.156-1.138.16z"/>
																<path d="M1.725 5.23H1.71c-.274-.01-.49-.243-.482-.524.057-1.997 1.747-2.835 2.626-2.998 1.481-.263 2.921.083 4.283 1.027.031.02.054.038.07.047l.021.014c.313.208.577.275.782.196.35-.132.621-.683.757-1.162.07-.255.178-.497.32-.717.763-1.146 2.117-1.258 3.127-.988.044.01.088.018.133.023.992.122 2.587.84 3.743 1.422.585.297 1.24.416 1.888.344 1.508-.171 3.174-.92 3.649-1.146.193-.094.395-.17.602-.226 2.282-.599 4.615.848 5.277 1.307.114.081.232.155.355.22 2.312 1.214 5.035.957 5.062.954.274-.028.518.177.545.458.027.28-.174.53-.448.558-.123.012-3.043.29-5.61-1.06-.16-.084-.313-.179-.46-.283-.574-.398-2.594-1.657-4.474-1.162-.147.04-.29.096-.426.164-.652.31-2.342 1.052-3.955 1.235-.837.093-1.682-.06-2.435-.443-1.521-.769-2.771-1.251-3.43-1.328-.092-.01-.182-.027-.271-.05-.33-.095-1.457-.319-2.047.579-.084.134-.148.281-.188.435-.163.547-.55 1.505-1.37 1.82-.514.195-1.072.096-1.659-.29l-.113-.076C6.44 2.787 5.244 2.495 4.028 2.71c-.067.013-1.76.36-1.807 2.033-.011.273-.23.487-.496.487z"/>
																<path d="M12.291 9.308c-.81 0-1.657-.29-2.202-1.12-.143-.22-.25-.462-.32-.716C9.625 7 9.36 6.455 9.01 6.31c-.207-.079-.469-.012-.782.197l-.024.015-.067.046c-1.362.944-2.802 1.29-4.28 1.027-.882-.158-2.572-.996-2.63-3-.007-.28.209-.514.483-.522.274-.008.502.213.51.494.047 1.679 1.748 2.019 1.813 2.033 1.21.215 2.41-.077 3.543-.871l.113-.077c.587-.388 1.146-.487 1.659-.29.82.309 1.207 1.273 1.366 1.82.04.155.104.302.188.436.594.898 1.72.674 2.051.581.09-.023.18-.04.271-.05.665-.079 1.915-.563 3.429-1.322.754-.382 1.598-.536 2.435-.443 1.611.183 3.303.925 3.955 1.234.137.069.279.124.425.165 1.881.493 3.9-.766 4.475-1.162.147-.108.3-.205.46-.29 2.567-1.347 5.487-1.073 5.61-1.061.274.027.475.277.448.557-.026.281-.27.487-.544.46-.028 0-2.761-.255-5.063.952-.123.066-.242.14-.355.223-.662.457-2.995 1.904-5.277 1.307-.207-.057-.41-.133-.603-.228-.474-.225-2.14-.975-3.648-1.146-.648-.072-1.303.048-1.888.345-1.156.581-2.744 1.3-3.743 1.421-.042 0-.092.013-.133.023-.3.081-.607.123-.917.124z"/>
															</g>
														</svg>
													</div>
													<?php break; ?>
												<?php case 'durability' :?>
													<div class="advance-card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="31" viewBox="0 0 26 31">
															<g fill="currentColor">
																<path d="M4.665 31l-.126-.11C.51 27.366-.914 21.73.96 16.728c1.875-5.003 6.658-8.334 12.021-8.371 5.364-.038 10.194 3.226 12.138 8.202 1.945 4.976.6 10.631-3.379 14.211l-.125.112L4.665 31zm8.408-21.775C8.09 9.223 3.62 12.277 1.828 16.908c-1.791 4.63-.532 9.88 3.166 13.206l16.27-.107c3.632-3.354 4.831-8.58 3.022-13.17-1.81-4.591-6.258-7.611-11.213-7.612z"/>
																<path d="M7.797 26.857l-.123-.105c-1.771-1.467-2.8-3.639-2.809-5.932 0-4.352 3.699-7.897 8.245-7.897 4.546 0 8.247 3.54 8.247 7.897-.012 2.256-1.007 4.395-2.728 5.863l-.122.107-10.71.067zm5.313-13.05c-4.06 0-7.364 3.145-7.364 7.019.009 1.979.874 3.858 2.374 5.157l10.052-.063c1.456-1.298 2.293-3.149 2.303-5.094 0-3.874-3.303-7.02-7.365-7.02z"/>
																<path d="M8.558 16.95h.764v2.837h.026c.157-.226.316-.438.464-.628l1.807-2.21h.948l-2.138 2.5 2.308 3.387h-.906l-1.948-2.89-.561.646v2.243h-.764v-5.886zM17.664 22.573c-.583.209-1.197.318-1.816.323-.896 0-1.632-.227-2.203-.776-.51-.49-.826-1.275-.826-2.194.01-1.754 1.22-3.038 3.203-3.038.503-.012 1.003.08 1.469.27l-.184.62c-.412-.179-.858-.265-1.307-.253-1.439 0-2.377.89-2.377 2.366s.903 2.375 2.28 2.375c.346.018.693-.035 1.018-.157v-1.754h-1.203v-.614h1.947l-.001 2.832zM18.627 4.897H7.464c-1.217 0-2.204-.982-2.204-2.193v-.51C5.26.981 6.247 0 7.464 0h11.163c1.217 0 2.204.982 2.204 2.193v.51c0 1.212-.987 2.194-2.204 2.194zM7.461.877c-.73 0-1.322.59-1.322 1.316v.51c0 .728.592 1.317 1.322 1.317h11.164c.73 0 1.322-.59 1.322-1.316v-.51c0-.727-.592-1.317-1.322-1.317H7.46z"/>
																<path d="M22 12.314l-.803-.36 2.33-5.16c.266-.582.375-1.222.32-1.859-.044-.528-.18-1.044-.406-1.524-.507-1.052-2.435-1.656-3.139-1.803l.176-.858c.12.024 2.957.619 3.758 2.28.27.574.436 1.192.488 1.825.07.786-.066 1.578-.393 2.297l-2.33 5.162z"/>
																<path d="M20.574 10.916l-.802-.363c.016-.036 1.682-3.69 2.35-5.305.098-.196.098-.426 0-.621-.307-.585-1.425-.95-1.83-1.039l.19-.856c.19.04 1.87.438 2.422 1.49.219.425.231.927.033 1.362-.675 1.628-2.346 5.295-2.363 5.332zM4.311 12.314l-2.33-5.16c-.327-.72-.462-1.511-.393-2.298.052-.632.218-1.25.49-1.825.798-1.66 3.635-2.256 3.755-2.28l.176.857-.088-.428.09.428c-.702.147-2.632.75-3.14 1.803-.225.48-.362.996-.405 1.524-.054.637.058 1.277.325 1.859l2.325 5.16-.805.36z"/>
																<path d="M5.738 10.916c-.01-.037-1.688-3.704-2.36-5.332-.198-.435-.185-.937.036-1.362.543-1.055 2.224-1.444 2.413-1.49l.196.856c-.404.09-1.522.45-1.83 1.039-.099.195-.099.425 0 .621.672 1.609 2.338 5.264 2.35 5.305l-.805.363z"/>
															</g>
														</svg>
													</div>
													<?php break; ?>
												<?php case 'comfort' :?>
													<div class="advance-card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="28" viewBox="0 0 40 28">
															<path fill="currentColor" d="M8.119 8.297s12.458 11.835 24.63 14.56c0 0-1.369-2.697-2.082-3.899.235.658.406 1.335.511 2.024l-3.214-3.615s.865 2.694 1.157 3.225c0 0-3.456-4.522-4.14-4.901-.686-.38-6.376-3.935-9.547-7.394l.93 3.46-4.472-7.504c-.385-.506-.866-.934-1.416-1.262C9.369 2.254 7.733.71 4.685.354c0 0-2.653-.248-4.036 3.084l3.499 4.253S.72 5.178.105 4.406c-.27 1.951-.014 3.939.742 5.763l8.458 2.782-6.516.38c.622 1.51 1.602 2.855 2.858 3.92l5.802-.674-4.916 1.64c2.902 2.65 6.285 4.738 9.972 6.157l7.567-2.024c-1.204 1.235-2.608 2.265-4.155 3.048 0 0 3.964 1.914 7.207 1.773l4.642-2.36-2.386 2.81.955.085 2.415-2.432 7.03.872-.958-.942s-6.03-.83-10.786-2.754c-4.757-1.925-7.568-3.346-12.029-6.55-4.461-3.204-7.888-7.603-7.888-7.603z"/>
														</svg>
													</div>
													<?php break; ?>
												<?php default :?>
													<?php break; ?>
												<?php endswitch;?>
										<?php endif; ?>
										<div class="advance-card__title"><?= $spec['title'] ?? ''?></div>
									</div>
									<div class="advance-card__text js-text-collapse" data-visible="1" data-bttn="Learn More" data-switch="Show Less">
										<?= $spec['text'] ?? ''?>
									</div>
								</div>
							<?php endforeach;?>
						<?php endif; ?>
					</div>
					<div class="sleepmaker-advance__brands">
						<div class="content-center">
							<?php $brands = $technology['brands']; ?>
							<h6><?= $brands['subtitle']?></h6>
							<h2><?= $brands['title']?></h2>
						</div>
						<div class="advance-brands js-tabs-wrapper">
							<div class="advance-brands__header">
								<ul class="advance-brands__list">
									<?php if(!empty($brands['list'])) :?>
										<?php $i = 1;
										foreach ($brands['list'] as $brand) :?>
											<li class="advance-brands__list-item"><span class="advance-brands__list-link js-tab-trigger" data-hash="#advance-tab-<?= $i ?>"><?= $brand['link']['title']; ?></span></li>
											<?php $i++; endforeach;?>
									<?php endif; ?>
								</ul>
							</div>
							<div class="advance-brands__body">
								<?php if(!empty($brands['list'])) :?>
									<?php $i = 1;
									foreach ($brands['list'] as $brand) :?>
										<div class="advance-brands__content js-tab-content" id="advance-tab-<?= $i ?>"><img src="<?= $brand['img']['url']; ?>" srcset="<?= $brand['img_2x']['url']; ?> 2x"/>
										</div>
										<?php $i++; endforeach;?>
								<?php endif; ?>
							</div>
						</div>
						<div class="advance-brands-caption"><?= $brands['caption']; ?></div>
					</div>
				</div>
				<div class="container">
					<div class="content-center big-text">
						<?php $where_to_buy = $technology['where_to_buy']; ?>
						<h2><?= $where_to_buy['title'] ?? '' ?></h2>
						<p><?= $where_to_buy['text'] ?? '' ?></p>
						<div class="bttn-row">
							<?php if(!empty($where_to_buy['buttons'])) :?>
								<?php foreach ($where_to_buy['buttons'] as $button) :?>
									<a class="bttn bttn--border" href="<?= $button['link']['url'] ?? ''?>"><?= $button['link']['title'] ?? ''?></a>
								<?php endforeach;?>
							<?php endif; ?>
						</div>
					</div>
				</div>
				<div class="availabe-here">
					<div class="container">
						<div class="content-center">
							<h6><?= $where_to_buy['subtitle'] ?? '' ?></h6>
						</div>
						<div class="availabe-here-row">
							<?php if(!empty($where_to_buy['stores'])) :?>
								<?php foreach ($where_to_buy['stores'] as $store) :?>
									<div class="availabe-here__item"><img src="<?= $store['img']['url'] ?? ''?>" srcset="<?= $store['img_2x']['url'] ?? ''?> 2x"/>
									</div>
								<?php endforeach;?>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php $yotpo = get_field('yotpo'); ?>
		<?php $yotpo_product_id = $yotpo['yotpo_product_id'] ?>
		<?php $post = get_post($yotpo_product_id); ?>
		<?php $postImage = get_field('review_image', $yotpo_product_id); ?>
        <div id="product-reviews">
            <div class="review">
                <div class="yotpo yotpo-main-widget"

                     data-product-id="<?= $yotpo_product_id; ?>"
                     data-name="<?= $post->post_title; ?>"

                     data-url="<?= get_post_permalink($yotpo_product_id) ?>"
					<?php if ($postImage) : ?>
                        data-image-url="<?= $postImage ?>"
					<?php endif; ?>
                     data-description="<?= $post->post_excerpt; ?>"

                     data-mode="questions"></div>
            </div>
        </div>
		<div id="product-specifications">
			<div class="product-specs-wrap">
				<div class="product-specs">
					<?php $specs = get_field('product_specs'); ?>
					<h3 class="product-specs__title"><?= $specs['title'] ?? ''?></h3>
					<div class="product-specs__sidebar">
						<div class="product-specs-contact">
							<div class="product-specs-contact__title"><?= $specs['subtitle'] ?? ''?></div>
							<ul class="product-specs-contact__list">
								<li class="product-specs-contact__list-item"><a class="product-specs-contact__list-link" href="<?= $specs['chat']['url'] ?? ''?>"><span class="product-specs-contact__list-icon">
												<svg class="icon message" width="30" height="30" viewBox="0 0 30 30">
													<use xlink:href="#message"></use>
												</svg></span><?= $specs['chat']['title'] ?? ''?></a></li>
								<li class="product-specs-contact__list-item"><a class="product-specs-contact__list-link" href="<?= $specs['mail']['url'] ?? ''?>"><span class="product-specs-contact__list-icon">
												<svg class="icon envelope" width="30" height="30" viewBox="0 0 30 30">
													<use xlink:href="#envelope"></use>
												</svg></span><?= $specs['mail']['title'] ?? ''?></a></li>
							</ul>
						</div>
					</div>
					<div class="product-specs__main">
						<div class="js-acc-wrap">
							<?php if(!empty($specs['list'])) :?>
								<?php foreach ($specs['list'] as $item) :?>
									<div class="product-specs-acc js-acc accordeon" data-toggle="specs">
										<div class="accordeon__title js-acc-trig">
											<img class="accordeon__title-img" src="<?= $item['icon']['url'] ?? ''?>" alt="dimension">
											<span class="accordeon__title-text"><?= $item['title'] ?? ''?></span>
											<span class="accordeon__title-icon">
											<svg class="icon plus" width="30" height="30" viewBox="0 0 30 30">
												<use xlink:href="#plus"></use>
											</svg></span>
										</div>
										<div class="accordeon__body js-acc-targ">
											<div class="product-specs-acc__inner">
												<?php if(!empty($item['content'])) : ?>
													<?php if(!empty($item['content']['img'])) : ?>
														<img src="<?= $item['content']['img']['url'];?>" srcset="<?= $item['content']['img_2x']['url'];?> 2x"/>
													<?php endif; ?>
													<?php if(!empty($item['content']['text'])) : ?>
														<?= $item['content']['text'];?>
													<?php endif; ?>
												<?php endif; ?>
											</div>
										</div>
									</div>
								<?php endforeach;?>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php $promo = get_field('promo'); ?>
		<div class="promo-decor promo-decor--equal promo-decor--full">
			<div class="promo-decor__bg">
				<picture>
					<source media="(max-width: 650px)" srcset="<?= $promo['img_mob']['url'] ?? ''?> 1x, <?= $promo['img_mob_2x']['url'] ?? ''?> 2x"><img src="<?= $promo['img']['url'] ?? ''?>" srcset="<?= $promo['img_2x']['url'] ?? ''?> 2x"/>
				</picture>
			</div>
			<div class="content-center has-white-color">
				<h6><?= $promo['subtitle'] ?? ''?></h6>
				<h2><?= $promo['title'] ?? ''?></h2>
				<div class="bttn-row">
					<?php if(!empty($promo['buttons'])) :?>
						<?php foreach ($promo['buttons'] as $button) :?>
							<a class="bttn bttn--reverse" href="<?= $button['link']['url'] ?? ''?>"><?= $button['link']['title'] ?? ''?></a>
						<?php endforeach;?>
					<?php endif; ?>
				</div>
			</div>
		</div>
		<?php $factory = get_field('factory'); ?>
		<div id="product-factory">
			<div class="bg-block">
				<div class="space-wrap">
					<div class="container">
						<div class="content-center">
							<h2><?= $factory['title'] ?? ''?></h2>
						</div>
					</div>
					<div class="full-page-slider">
						<div class="swiper-container js-full-page-slider">
							<div class="swiper-wrapper">
								<?php if(!empty($factory['slider'])) :?>
									<?php foreach ($factory['slider'] as $slide) :?>
										<div class="swiper-slide"><img src="<?= $slide['img']['url'] ?? ''?>" srcset="<?= $slide['img_2x']['url'] ?? ''?> 2x"/>
										</div>
									<?php endforeach;?>
								<?php endif; ?>
							</div>
							<div class="swiper-nav">
								<div class="swiper-button-prev js-full-page-slider-prev">
									<div class="swiper-button-icon">
										<svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
											<use xlink:href="#arrow-right"></use>
										</svg>
									</div>
								</div>
								<div class="swiper-button-next js-full-page-slider-next">
									<div class="swiper-button-icon">
										<svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
											<use xlink:href="#arrow-right"></use>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="content-center">
							<h2><?= $factory['subtitle'] ?? ''?></h2>
							<p><?= $factory['text'] ?? ''?></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php $related_articles = get_field('related_articles'); ?>
		<div class="complete-card-outer">
			<div class="content-center">
				<h3><?= $related_articles['title'] ?? '' ?></h3>
			</div>
			<div class="complete-card-wrap">
				<?php if(!empty($related_articles['articles'])) :?>
					<?php foreach ($related_articles['articles'] as $article) :?>
						<div class="complete-card">
							<div class="complete-card__img"><img src="<?= $article['img']['url'] ?? ''?>" srcset="<?= $article['img_2x']['url'] ?? ''?> 2x"/>
							</div>
							<div class="complete-card__title"><?= $article['title'] ?? ''?><span class="complete-card__subtitle"><?= $article['title'] ?? ''?></span>
							</div>
							<p class="complete-card__text"><?= $article['text'] ?? ''?></p><a class="link-underline" href="<?= $article['cta']['url'] ?? ''?>"><?= $article['cta']['title'] ?? ''?></a>
						</div>
					<?php endforeach;?>
				<?php endif; ?>
			</div>
		</div>
		<?php $complete_cards = get_field('complete_card'); ?>
		<hr class="page-devider">
		<div class="complete-card-outer">
			<div class="content-center">
				<h3><?= $complete_cards['title'] ?? ''?></h3>
			</div>
			<div class="complete-card-wrap">
				<?php if(!empty($complete_cards['cards'])) :?>
					<?php foreach ($complete_cards['cards'] as $card) :?>
						<div class="complete-card complete-card--w50">
							<div class="complete-card__img"><img src="<?= $card['img']['url'] ?? ''?>" srcset="<?= $card['img_2x']['url'] ?? ''?> 2x"/>
							</div>
							<div class="complete-card__title"><?= $card['title'] ?? ''?><span class="complete-card__subtitle"><?= $card['subtitle'] ?? ''?></span>
							</div>
							<p class="complete-card__text"><?= $card['text'] ?? ''?></p><a class="bttn" href="<?= $card['cta']['url'] ?? ''?>"><?= $card['cta']['title'] ?? ''?></a>
						</div>
					<?php endforeach;?>
				<?php endif; ?>
			</div>
		</div>
	</div>
	</div>
<?php get_footer() ?>