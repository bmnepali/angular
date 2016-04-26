/**
 * A wrapper around a native element inside of a View.
 *
 * An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
 * element.
 */
// Note: We don't expose things like `Injector`, `ViewContainer`, ... here,
// i.e. users have to ask for what they need. With that, we can build better analysis tools
// and could do better codegen in the future.
export class ElementRef {
    constructor(nativeElement) {
        this.nativeElement = nativeElement;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUZSWE9uY2tqLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZWxlbWVudF9yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCwyRUFBMkU7QUFDM0UsMkZBQTJGO0FBQzNGLDZDQUE2QztBQUM3QztJQXNCRSxZQUFZLGFBQWtCO1FBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFBQyxDQUFDO0FBQ3pFLENBQUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIG5hdGl2ZSBlbGVtZW50IGluc2lkZSBvZiBhIFZpZXcuXG4gKlxuICogQW4gYEVsZW1lbnRSZWZgIGlzIGJhY2tlZCBieSBhIHJlbmRlci1zcGVjaWZpYyBlbGVtZW50LiBJbiB0aGUgYnJvd3NlciwgdGhpcyBpcyB1c3VhbGx5IGEgRE9NXG4gKiBlbGVtZW50LlxuICovXG4vLyBOb3RlOiBXZSBkb24ndCBleHBvc2UgdGhpbmdzIGxpa2UgYEluamVjdG9yYCwgYFZpZXdDb250YWluZXJgLCAuLi4gaGVyZSxcbi8vIGkuZS4gdXNlcnMgaGF2ZSB0byBhc2sgZm9yIHdoYXQgdGhleSBuZWVkLiBXaXRoIHRoYXQsIHdlIGNhbiBidWlsZCBiZXR0ZXIgYW5hbHlzaXMgdG9vbHNcbi8vIGFuZCBjb3VsZCBkbyBiZXR0ZXIgY29kZWdlbiBpbiB0aGUgZnV0dXJlLlxuZXhwb3J0IGNsYXNzIEVsZW1lbnRSZWYge1xuICAvKipcbiAgICogVGhlIHVuZGVybHlpbmcgbmF0aXZlIGVsZW1lbnQgb3IgYG51bGxgIGlmIGRpcmVjdCBhY2Nlc3MgdG8gbmF0aXZlIGVsZW1lbnRzIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICogKGUuZy4gd2hlbiB0aGUgYXBwbGljYXRpb24gcnVucyBpbiBhIHdlYiB3b3JrZXIpLlxuICAgKlxuICAgKiA8ZGl2IGNsYXNzPVwiY2FsbG91dCBpcy1jcml0aWNhbFwiPlxuICAgKiAgIDxoZWFkZXI+VXNlIHdpdGggY2F1dGlvbjwvaGVhZGVyPlxuICAgKiAgIDxwPlxuICAgKiAgICBVc2UgdGhpcyBBUEkgYXMgdGhlIGxhc3QgcmVzb3J0IHdoZW4gZGlyZWN0IGFjY2VzcyB0byBET00gaXMgbmVlZGVkLiBVc2UgdGVtcGxhdGluZyBhbmRcbiAgICogICAgZGF0YS1iaW5kaW5nIHByb3ZpZGVkIGJ5IEFuZ3VsYXIgaW5zdGVhZC4gQWx0ZXJuYXRpdmVseSB5b3UgdGFrZSBhIGxvb2sgYXQge0BsaW5rIFJlbmRlcmVyfVxuICAgKiAgICB3aGljaCBwcm92aWRlcyBBUEkgdGhhdCBjYW4gc2FmZWx5IGJlIHVzZWQgZXZlbiB3aGVuIGRpcmVjdCBhY2Nlc3MgdG8gbmF0aXZlIGVsZW1lbnRzIGlzIG5vdFxuICAgKiAgICBzdXBwb3J0ZWQuXG4gICAqICAgPC9wPlxuICAgKiAgIDxwPlxuICAgKiAgICBSZWx5aW5nIG9uIGRpcmVjdCBET00gYWNjZXNzIGNyZWF0ZXMgdGlnaHQgY291cGxpbmcgYmV0d2VlbiB5b3VyIGFwcGxpY2F0aW9uIGFuZCByZW5kZXJpbmdcbiAgICogICAgbGF5ZXJzIHdoaWNoIHdpbGwgbWFrZSBpdCBpbXBvc3NpYmxlIHRvIHNlcGFyYXRlIHRoZSB0d28gYW5kIGRlcGxveSB5b3VyIGFwcGxpY2F0aW9uIGludG8gYVxuICAgKiAgICB3ZWIgd29ya2VyLlxuICAgKiAgIDwvcD5cbiAgICogPC9kaXY+XG4gICAqL1xuICBwdWJsaWMgbmF0aXZlRWxlbWVudDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG5hdGl2ZUVsZW1lbnQ6IGFueSkgeyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBuYXRpdmVFbGVtZW50OyB9XG59XG4iXX0=