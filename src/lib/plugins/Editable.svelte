<svelte:options immutable />

<script lang="ts">
	import type { ISvelteComponent } from '../utils';
	import DefaultPlaceholder from '../components/DefaultPlaceholder.svelte';
	import Editable, { defaultScrollSelectionIntoView } from '../components/Editable.svelte';
	import type { IPlaceholderProps } from '../components/InternalLeaf.svelte';
	import Element from './Element.svelte';
	import Leaf from './Leaf.svelte';
	import type { defaultDecorate } from '../components/Slate.svelte';

	export let Placeholder: ISvelteComponent<IPlaceholderProps> = DefaultPlaceholder;
	export let placeholder: string | undefined = undefined;
	export let readOnly = false;
	export let autoFocus = false;
	export let decorate: typeof defaultDecorate | undefined = undefined;
	export let scrollSelectionIntoView: typeof defaultScrollSelectionIntoView | undefined = undefined;
	export let ref: HTMLDivElement | undefined = undefined;
	export let spellcheck = true;
	export let autocorrect: string = 'true';
	export let autocapitalize: string = 'true';
	export let onKeyDown: svelte.JSX.KeyboardEventHandler<HTMLElement> = () => undefined;
</script>

<Editable
	{...$$restProps}
	{Element}
	{Leaf}
	{Placeholder}
	bind:ref
	{placeholder}
	{readOnly}
	{autoFocus}
	bind:decorate
	bind:scrollSelectionIntoView
	{spellcheck}
	{autocorrect}
	{autocapitalize}
	{onKeyDown}
/>
