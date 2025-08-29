import React, { useState } from 'react'

import { 
	OptionType, 
	fontColors, 
	fontFamilyOptions, 
	fontSizeOptions, 
	defaultArticleState, 
	contentWidthArr, 
	backgroundColors,
	ArticleStateType
} from 'src/constants/articleProps';

import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from '../../ui/select'
import { RadioGroup } from '../../ui/radio-group'
import { Separator } from '../../ui/separator'
import { Text } from '../../ui/text'

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	onApply: (options: ArticleStateType) => void;
}

export const ArticleParamsForm = ({onApply}: ArticleParamsFormProps) => {
	const { 
		fontFamilyOption, 
		fontColor, 
		backgroundColor,
		contentWidth, 
		fontSizeOption 
	} = defaultArticleState

	const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);

	const [selectedFont, setSelectedFont] = useState<OptionType>(fontFamilyOption);
	const [selectedSizeFont, setSizeFont] = useState<OptionType>(fontSizeOption);
	const [selectedFontColor, setFontColor] = useState<OptionType>(fontColor);
	const [selectedBackgroundColor, setBackgroundColor] = useState<OptionType>(backgroundColor);
	const [selectedContentWidth, setContentWidth] = useState<OptionType>(contentWidth);

	const toggleOpenSideBar = () => setIsOpenSideBar(prev => !prev);

	function handleApply(event: React.FormEvent<HTMLFormElement> ) {
		event.preventDefault();

		const selectedArticleOptions: ArticleStateType  = {
			fontFamilyOption: selectedFont,
			fontColor: selectedFontColor,
			backgroundColor: selectedBackgroundColor,
			contentWidth: selectedContentWidth,
			fontSizeOption: selectedSizeFont
		}

		onApply(selectedArticleOptions);
		setIsOpenSideBar(!isOpenSideBar);
	}

	function handleReset(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		setSelectedFont(fontFamilyOption);
		setSizeFont(fontSizeOption);
		setFontColor(fontColor);
		setBackgroundColor(backgroundColor);
		setContentWidth(contentWidth);

		onApply(defaultArticleState);
		setIsOpenSideBar(!isOpenSideBar);
	}

	const handleOverlayClick = (event: React.MouseEvent) => {
		if (event.target === event.currentTarget) {
			setIsOpenSideBar(false);
		}
	};

	const handleFormClick = (event: React.MouseEvent) => {
		event.stopPropagation();
	};

	return (
		<>
			<ArrowButton isOpen={isOpenSideBar} onClick={toggleOpenSideBar} />

			{isOpenSideBar && (
				<div className={styles.overlay} onClick={handleOverlayClick}>
					<aside className={`${styles.container} ${isOpenSideBar ? styles.container_open : ''} `}>
						<form 
							className={styles.form}
							onClick={handleFormClick}
							onSubmit={handleApply}
							onReset={handleReset}
						>
							<Text as="h2" size={31} weight={800} uppercase>
								задайте параметры
							</Text>

							<div className={styles.section}>
								<Select 
									selected={selectedFont} 
									options={fontFamilyOptions} 
									placeholder={selectedFont.value}
									onChange={setSelectedFont} 
									title="шрифт"
								/>
							</div>

							<div className={styles.section}>
								<RadioGroup
									name={selectedSizeFont.className}
									options={fontSizeOptions}
									selected={selectedSizeFont}
									onChange={setSizeFont} 
									title="размер шрифта"
								/>
							</div>

							<div className={styles.section}>
								<Select 
									selected={selectedFontColor} 
									options={fontColors} 
									placeholder={selectedFontColor.className}
									onChange={setFontColor} 
									title="цвет шрифта"
								/>
							</div>

							<div className={styles.section}>
								<Separator />
							</div>

							<div className={styles.section}>
								<Select 
									selected={selectedBackgroundColor} 
									options={backgroundColors} 
									placeholder={selectedBackgroundColor.className}
									onChange={setBackgroundColor}
									title="цвет фона"
								/>
							</div>

							<div className={styles.section}>
								<Select 
									selected={selectedContentWidth} 
									options={contentWidthArr} 
									placeholder={selectedContentWidth.className}
									onChange={setContentWidth}
									title="ширина контента"
								/>
							</div>

							<div className={styles.bottomContainer}>
								<Button title='сбросить' htmlType='reset' type='clear' />
								<Button title='применить' htmlType='submit' type='apply' />
							</div>
						</form>
					</aside>
				</div>
			)}
		</>
	);
};