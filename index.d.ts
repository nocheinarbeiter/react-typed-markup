/// <reference types="react" />
import * as React from 'react';
export declare function bind(tag: string, block: string, elem: string): any;
export declare function factory(tag: string, block: string, elem: string): any;
import { ReactNode, ReactChild, HTMLAttributes, ClassAttributes, DetailedReactHTMLElement } from 'react';
export declare type StrictReactFragment = Array<ReactChild | any[] | boolean>;
export declare type StrictReactNode = ReactChild | StrictReactFragment | boolean | null | undefined;
export interface Factory<TModProps, TAttributes extends HTMLAttributes<TElement>, TElement extends HTMLElement> {
    (child?: StrictReactNode, ...children: ReactNode[]): DetailedReactHTMLElement<TAttributes, TElement>;
    (props?: TModProps, ...children: ReactNode[]): DetailedReactHTMLElement<TAttributes, TElement>;
}
export interface AnchorHTMLModProps<T extends HTMLElement, M> extends React.AnchorHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface HTMLModProps<T extends HTMLElement, M> extends React.HTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface AreaHTMLModProps<T extends HTMLElement, M> extends React.AreaHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface AudioHTMLModProps<T extends HTMLElement, M> extends React.AudioHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface BaseHTMLModProps<T extends HTMLElement, M> extends React.BaseHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface BlockquoteHTMLModProps<T extends HTMLElement, M> extends React.BlockquoteHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface ButtonHTMLModProps<T extends HTMLElement, M> extends React.ButtonHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface CanvasHTMLModProps<T extends HTMLElement, M> extends React.CanvasHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface ColHTMLModProps<T extends HTMLElement, M> extends React.ColHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface ColgroupHTMLModProps<T extends HTMLElement, M> extends React.ColgroupHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface DelHTMLModProps<T extends HTMLElement, M> extends React.DelHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface DetailsHTMLModProps<T extends HTMLElement, M> extends React.DetailsHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface EmbedHTMLModProps<T extends HTMLElement, M> extends React.EmbedHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface FieldsetHTMLModProps<T extends HTMLElement, M> extends React.FieldsetHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface FormHTMLModProps<T extends HTMLElement, M> extends React.FormHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface HtmlHTMLModProps<T extends HTMLElement, M> extends React.HtmlHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface IframeHTMLModProps<T extends HTMLElement, M> extends React.IframeHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface ImgHTMLModProps<T extends HTMLElement, M> extends React.ImgHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface InputHTMLModProps<T extends HTMLElement, M> extends React.InputHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface InsHTMLModProps<T extends HTMLElement, M> extends React.InsHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface KeygenHTMLModProps<T extends HTMLElement, M> extends React.KeygenHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface LabelHTMLModProps<T extends HTMLElement, M> extends React.LabelHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface LiHTMLModProps<T extends HTMLElement, M> extends React.LiHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface LinkHTMLModProps<T extends HTMLElement, M> extends React.LinkHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface MapHTMLModProps<T extends HTMLElement, M> extends React.MapHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface MenuHTMLModProps<T extends HTMLElement, M> extends React.MenuHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface MetaHTMLModProps<T extends HTMLElement, M> extends React.MetaHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface MeterHTMLModProps<T extends HTMLElement, M> extends React.MeterHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface ObjectHTMLModProps<T extends HTMLElement, M> extends React.ObjectHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface OlHTMLModProps<T extends HTMLElement, M> extends React.OlHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface OptgroupHTMLModProps<T extends HTMLElement, M> extends React.OptgroupHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface OptionHTMLModProps<T extends HTMLElement, M> extends React.OptionHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface OutputHTMLModProps<T extends HTMLElement, M> extends React.OutputHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface ParamHTMLModProps<T extends HTMLElement, M> extends React.ParamHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface ProgressHTMLModProps<T extends HTMLElement, M> extends React.ProgressHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface QuoteHTMLModProps<T extends HTMLElement, M> extends React.QuoteHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface ScriptHTMLModProps<T extends HTMLElement, M> extends React.ScriptHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface SelectHTMLModProps<T extends HTMLElement, M> extends React.SelectHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface SourceHTMLModProps<T extends HTMLElement, M> extends React.SourceHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface StyleHTMLModProps<T extends HTMLElement, M> extends React.StyleHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface TableHTMLModProps<T extends HTMLElement, M> extends React.TableHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface TdHTMLModProps<T extends HTMLElement, M> extends React.TdHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface TextareaHTMLModProps<T extends HTMLElement, M> extends React.TextareaHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface ThHTMLModProps<T extends HTMLElement, M> extends React.ThHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface TimeHTMLModProps<T extends HTMLElement, M> extends React.TimeHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface TrackHTMLModProps<T extends HTMLElement, M> extends React.TrackHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export interface VideoHTMLModProps<T extends HTMLElement, M> extends React.VideoHTMLAttributes<T>, ClassAttributes<T> {
    mods?: M;
}
export declare type TagA<M> = Factory<AnchorHTMLModProps<HTMLAnchorElement, M>, React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export declare type TagABBR<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagADDRESS<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagAREA<M> = Factory<AreaHTMLModProps<HTMLAreaElement, M>, React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
export declare type TagARTICLE<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagASIDE<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagAUDIO<M> = Factory<AudioHTMLModProps<HTMLAudioElement, M>, React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
export declare type TagB<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagBASE<M> = Factory<BaseHTMLModProps<HTMLBaseElement, M>, React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
export declare type TagBDI<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagBDO<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagBIG<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagBLOCKQUOTE<M> = Factory<BlockquoteHTMLModProps<HTMLElement, M>, React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagBODY<M> = Factory<HTMLModProps<HTMLBodyElement, M>, React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
export declare type TagBR<M> = Factory<HTMLModProps<HTMLBRElement, M>, React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
export declare type TagBUTTON<M> = Factory<ButtonHTMLModProps<HTMLButtonElement, M>, React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export declare type TagCANVAS<M> = Factory<CanvasHTMLModProps<HTMLCanvasElement, M>, React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
export declare type TagCAPTION<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagCITE<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagCODE<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagCOL<M> = Factory<ColHTMLModProps<HTMLTableColElement, M>, React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
export declare type TagCOLGROUP<M> = Factory<ColgroupHTMLModProps<HTMLTableColElement, M>, React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
export declare type TagDATA<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagDATALIST<M> = Factory<HTMLModProps<HTMLDataListElement, M>, React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
export declare type TagDD<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagDEL<M> = Factory<DelHTMLModProps<HTMLElement, M>, React.DelHTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagDETAILS<M> = Factory<DetailsHTMLModProps<HTMLElement, M>, React.DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagDFN<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagDIALOG<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagDIV<M> = Factory<HTMLModProps<HTMLDivElement, M>, React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare type TagDL<M> = Factory<HTMLModProps<HTMLDListElement, M>, React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
export declare type TagDT<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagEM<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagEMBED<M> = Factory<EmbedHTMLModProps<HTMLEmbedElement, M>, React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
export declare type TagFIELDSET<M> = Factory<FieldsetHTMLModProps<HTMLFieldSetElement, M>, React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
export declare type TagFIGCAPTION<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagFIGURE<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagFOOTER<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagFORM<M> = Factory<FormHTMLModProps<HTMLFormElement, M>, React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
export declare type TagH1<M> = Factory<HTMLModProps<HTMLHeadingElement, M>, React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export declare type TagH2<M> = Factory<HTMLModProps<HTMLHeadingElement, M>, React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export declare type TagH3<M> = Factory<HTMLModProps<HTMLHeadingElement, M>, React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export declare type TagH4<M> = Factory<HTMLModProps<HTMLHeadingElement, M>, React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export declare type TagH5<M> = Factory<HTMLModProps<HTMLHeadingElement, M>, React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export declare type TagH6<M> = Factory<HTMLModProps<HTMLHeadingElement, M>, React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export declare type TagHEAD<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagHEADER<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagHGROUP<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagHR<M> = Factory<HTMLModProps<HTMLHRElement, M>, React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
export declare type TagHTML<M> = Factory<HtmlHTMLModProps<HTMLHtmlElement, M>, React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
export declare type TagI<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagIFRAME<M> = Factory<IframeHTMLModProps<HTMLIFrameElement, M>, React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
export declare type TagIMG<M> = Factory<ImgHTMLModProps<HTMLImageElement, M>, React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
export declare type TagINPUT<M> = Factory<InputHTMLModProps<HTMLInputElement, M>, React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type TagINS<M> = Factory<InsHTMLModProps<HTMLModElement, M>, React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
export declare type TagKBD<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagKEYGEN<M> = Factory<KeygenHTMLModProps<HTMLElement, M>, React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagLABEL<M> = Factory<LabelHTMLModProps<HTMLLabelElement, M>, React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
export declare type TagLEGEND<M> = Factory<HTMLModProps<HTMLLegendElement, M>, React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
export declare type TagLI<M> = Factory<LiHTMLModProps<HTMLLIElement, M>, React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
export declare type TagLINK<M> = Factory<LinkHTMLModProps<HTMLLinkElement, M>, React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
export declare type TagMAIN<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagMAP<M> = Factory<MapHTMLModProps<HTMLMapElement, M>, React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
export declare type TagMARK<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagMENU<M> = Factory<MenuHTMLModProps<HTMLElement, M>, React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagMENUITEM<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagMETA<M> = Factory<MetaHTMLModProps<HTMLMetaElement, M>, React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
export declare type TagMETER<M> = Factory<MeterHTMLModProps<HTMLElement, M>, React.MeterHTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagNAV<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagNOSCRIPT<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagOBJECT<M> = Factory<ObjectHTMLModProps<HTMLObjectElement, M>, React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
export declare type TagOL<M> = Factory<OlHTMLModProps<HTMLOListElement, M>, React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
export declare type TagOPTGROUP<M> = Factory<OptgroupHTMLModProps<HTMLOptGroupElement, M>, React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
export declare type TagOPTION<M> = Factory<OptionHTMLModProps<HTMLOptionElement, M>, React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
export declare type TagOUTPUT<M> = Factory<OutputHTMLModProps<HTMLElement, M>, React.OutputHTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagP<M> = Factory<HTMLModProps<HTMLParagraphElement, M>, React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
export declare type TagPARAM<M> = Factory<ParamHTMLModProps<HTMLParamElement, M>, React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
export declare type TagPICTURE<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagPRE<M> = Factory<HTMLModProps<HTMLPreElement, M>, React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
export declare type TagPROGRESS<M> = Factory<ProgressHTMLModProps<HTMLProgressElement, M>, React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
export declare type TagQ<M> = Factory<QuoteHTMLModProps<HTMLQuoteElement, M>, React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
export declare type TagRP<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagRT<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagRUBY<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagS<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagSAMP<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagSCRIPT<M> = Factory<ScriptHTMLModProps<HTMLScriptElement, M>, React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
export declare type TagSECTION<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagSELECT<M> = Factory<SelectHTMLModProps<HTMLSelectElement, M>, React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
export declare type TagSMALL<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagSOURCE<M> = Factory<SourceHTMLModProps<HTMLSourceElement, M>, React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
export declare type TagSPAN<M> = Factory<HTMLModProps<HTMLSpanElement, M>, React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
export declare type TagSTRONG<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagSTYLE<M> = Factory<StyleHTMLModProps<HTMLStyleElement, M>, React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
export declare type TagSUB<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagSUMMARY<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagSUP<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagTABLE<M> = Factory<TableHTMLModProps<HTMLTableElement, M>, React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
export declare type TagTBODY<M> = Factory<HTMLModProps<HTMLTableSectionElement, M>, React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
export declare type TagTD<M> = Factory<TdHTMLModProps<HTMLTableDataCellElement, M>, React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
export declare type TagTEXTAREA<M> = Factory<TextareaHTMLModProps<HTMLTextAreaElement, M>, React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export declare type TagTFOOT<M> = Factory<HTMLModProps<HTMLTableSectionElement, M>, React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
export declare type TagTH<M> = Factory<ThHTMLModProps<HTMLTableHeaderCellElement, M>, React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
export declare type TagTHEAD<M> = Factory<HTMLModProps<HTMLTableSectionElement, M>, React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
export declare type TagTIME<M> = Factory<TimeHTMLModProps<HTMLElement, M>, React.TimeHTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagTITLE<M> = Factory<HTMLModProps<HTMLTitleElement, M>, React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
export declare type TagTR<M> = Factory<HTMLModProps<HTMLTableRowElement, M>, React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
export declare type TagTRACK<M> = Factory<TrackHTMLModProps<HTMLTrackElement, M>, React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
export declare type TagU<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagUL<M> = Factory<HTMLModProps<HTMLUListElement, M>, React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
export declare type TagVAR<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type TagVIDEO<M> = Factory<VideoHTMLModProps<HTMLVideoElement, M>, React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
export declare type TagWBR<M> = Factory<HTMLModProps<HTMLElement, M>, React.HTMLAttributes<HTMLElement>, HTMLElement>;
